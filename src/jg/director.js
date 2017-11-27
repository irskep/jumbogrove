import _ from 'lodash';
import Situation from './situation';
import WorldModel from './model';

const nop = () => { };
class JumboGroveDirector {
    constructor({
        id,
        version = 1,
        initialSituation = 'start', 
        navHeader = '',
        asideHeader = '',
        globalState = {},
        characters = [],
        situations = [],
        // (model, ui, markdown)
        init = nop,
        // Return falsey value if you want to abort the new situation
        // (model, ui, previousId, nextId)
        willEnter = () => true,
        // (model, ui, previousId, nextId)
        didEnter = nop,
        // (model, ui, thisId, nextId)
        willExit = nop,
        // (model, ui, thisId, nextId)
        didExit = nop,
        // (model, ui, situation, action)
        willAct = nop,
        // (model, ui, situation, action)
        didAct = nop,
    }) {
        if (!id) throw new Error("You must provide an id"); 
        Object.assign(this, {
            id, willEnter, didEnter, willExit, didExit, willAct, didAct,
            navHeader, asideHeader, init,
        });

        this._situations = {};
        situations.forEach((s) => this._situations[s.id] = new Situation(s));

        this._initialSituationId = initialSituation;

        this.model = new WorldModel({characters, globalState});
        this.model.goTo = this.goTo.bind(this);
    }

    toString() {
        return `Director(id=${this.id})`;
    }

    bindToUI(ui) {
      this.ui = ui;
      ui.bind(this);
      this.model.navHeaderHTML = ui.renderMarkdown(this.navHeader);
      this.model.asideHeaderHTML = ui.renderMarkdown(this.asideHeader);
      this.init(this.model, this.ui, this.ui.md);
    }

    start() {
        if (this.currentSituation) {
            throw new Error("You may only start once!");
        }
        this.goTo(this._initialSituationId);
    }

    situation(id) {
        if (!this._situations[id]) throw new Error(`Situation not found: ${id}`);
        return this._situations[id];
    }

    situations(idOrTag) {
        if (idOrTag.startsWith("#")) {
            const tag = idOrTag.slice(1);
            return Object.values(this._situations)
                .filter((s) => s.tags.indexOf(tag) !== -1);
        } else {
            return [this._situations[idOrTag]];
        }
    }

    isManagedLink(href) {
        return href.startsWith('@') || href.startsWith('>');
    }

    goToSmart(href, itemId, targetEl) {
        if (href.startsWith('@')) {
            this.goTo(href.slice(1));
        } else if (href.startsWith('>')) {
            this.runAction(href.slice(1), itemId, targetEl);
        }
    }

    runAction(action, itemId, targetEl) {
        if (action.startsWith('write_')) {
            const id = action.slice('write_'.length);
            if (!id) return;
            this.ui.bus.$emit('write', {
                'itemId': itemId,
                'id': id,
                'html': this.ui.renderMarkdownTemplate(this.model.currentSituation.writers[id]),
            });
            return;
        } else if (action.startsWith('replace_')) {
            const id = action.slice('replace_'.length);
            if (!id) return;
            this.ui.bus.$emit('replace', {
                'itemId': itemId,
                'id': id,
                'html': this.ui.renderMarkdownTemplate(this.model.currentSituation.replacers[id], null, true),
            });
            return;
        } else if (action.startsWith('replaceself_')) {
            const id = action.slice('replaceself_'.length);
            if (!id) return;
            this.ui.bus.$emit('replaceself', {
                'itemId': itemId,
                'targetEl': targetEl,
                'html': this.ui.renderMarkdownTemplate(this.model.currentSituation.replacers[id], null, true),
            });
            return;
        }

        this.willAct(this.model, this.ui, this.model.currentSituation, action);
        this.model.currentSituation.doAct(this.model, this.ui, action);
        this.didAct(this.model, this.ui, this.model.currentSituation, action);
    }

    goTo(id) {
        const next = this.situation(id);
        const previous = this.model.currentSituation;
        const previousId = previous ? previous.id : null;
        if (this.model.currentSituation) {
            this.willExit(this.model, this.ui, previousId, id);
            this.model.currentSituation.doExit(this.model, this.ui, next);
            this.didExit(this.model, this.ui, previousId, id);
        }
        this.model.currentSituation = null;

        // willEnter() may redirect us
        if (!this.willEnter(this.model, this.ui, previousId, id)) {
            return;
        }

        this.model.currentSituation = next;
        next.doEnter(this.model, this.ui, previous);
        this.didEnter(this.model, this.ui, previousId, id);
    }

    interpretChoices(arrayOfSituationIdsOrTags, atLeast = 0, atMost = Number.MAX_VALUE) {
        const host = this.model.currentSituation;
        const situations = [].concat.apply(
            [], arrayOfSituationIdsOrTags.map(this.situations.bind(this)));
        // remove invisible situations
        const visibleSituations = situations.filter((s) => s.getCanSee(this.model, host));

        // sort by display order
        const sortedSituations = _.sortBy(
            visibleSituations, (s) => s.getDisplayOrder(this.model, host));

        // index by priority; figure out what priorities are being used
        const sortedSituationsByPriority = {};
        const prioritiesSeen = [];
        for (const s of sortedSituations) {
            const p = s.getPriority(this.model, host);
            if (!sortedSituationsByPriority[p]) sortedSituationsByPriority[p] = [];
            sortedSituationsByPriority[p].push(s);
            prioritiesSeen.push(p);
        }

        // figure out what priority we want to use (only one!)
        let chosenPriority = Number.MAX_VALUE;
        for (const p of _.uniq(prioritiesSeen.sort().reverse())) {
            if (sortedSituationsByPriority[p].length >= atLeast) {
                chosenPriority = p;
                break;
            }
        }
        let chosenSituations = sortedSituationsByPriority[chosenPriority];
        if (!chosenSituations) {
            return [];  // Uh oh!
        }

        // Remove random array items until we are under the limit
        while (chosenSituations.length > atMost) {
            const i = Math.floor(this.model.random() * chosenSituations.length);
            chosenSituations.splice(i, 1);
        }

        // return the chosen situations and provide more info for each
        return chosenSituations.map((s) => {
            return {
                situationId: s.id,
                text: s.getOptionText(this.model, host),
                isEnabled: s.getCanChoose(this.model, host),
            };
        });
    }
}

export default JumboGroveDirector;