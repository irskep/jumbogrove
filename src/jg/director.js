import _ from 'lodash';
import Situation from './situation';
import WorldModel from './model';
import commands from "./commands";
import Vue from 'vue';

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
        this.model.handleCommandString = this.handleCommandString.bind(this);
        this.model.do = this.handleCommandString.bind(this);
        this.interactive = true;
    }

    toString() {
        return `Director(id=${this.id})`;
    }

    bindToUI(ui) {
        const wasBound = !!this.ui;
        this.ui = ui;
        ui.bind(this);
        this.model.navHeaderHTML = ui.renderMarkdown(this.navHeader);
        this.model.asideHeaderHTML = () => {
            return ui.renderMarkdownTemplate(this.asideHeader);
        }
        if (!wasBound) {
            this.init(this.model, this.ui, this.ui.md);
        }
    }

    start() {
        if (this.model.currentSituation) {
            return;
        }
        if (!this.load()) {
            this.goTo(this._initialSituationId);
        }
    }

    save() {
        localStorage[this.id] = JSON.stringify(this.history);
    }
    
    load() {
        this.history = [];
        return false;
        this.interactive = false;
        if (localStorage[this.id]) {
            try {
                const entries = JSON.parse(localStorage[this.id]);
                this.goTo(this._initialSituationId);

                console.log(entries);
                const step = () => {
                    if (entries.length <= 0) {
                        this.interactive = true;
                        return;
                    }
                    Vue.nextTick(() => {
                        this.handleCommandString(...entries.shift());
                        step();
                    });
                }
                step();
                return true
            } catch (e) {
                this.interactive = true;
                console.warn(e);
                return false;
            }
        }
        this.interactive = true;
        return false
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
        return commandsFromString(href).length > 0;
    }

    getSnippetWrapperTag(id) {
        if (!this.model.currentSituation.snippets[id]) {
            throw new Error(`Snippet ${this.model.currentSituation.id}.${id} doesn't exist`);
        }
        return this.model.currentSituation.snippets[id].indexOf('\n') === -1 ? 'span' : 'div';
    }

    getSnippetHTML(id) {
        if (!this.model.currentSituation.snippets[id]) {
            throw new Error(`Snippet ${this.model.currentSituation.id}.${id} doesn't exist`);
        }
        return this.ui.renderMarkdownTemplateMaybeInline(
            this.model.currentSituation.snippets[id]);
    }

    getSnippet(id) {
        if (!this.model.currentSituation.snippets[id]) {
            throw new Error(`Snippet ${this.model.currentSituation.id}.${id} doesn't exist`);
        }
        return this.ui.renderTemplate(this.model.currentSituation.snippets[id]);
    }

    handleCommandString(s, itemId = null, sourceElId = null) {
        let restore = false;
        if (itemId !== null) {
            restore = true;
            this.activeItemId = itemId;
            this.activeSourceElId = sourceElId;
            if (this.interactive) {
                this.history.push(_.toArray(arguments));
                this.save();
            }
        }
        for (const cmd of commandsFromString(s, this.activeItemId, this.activeSourceElId)) {
            this.handleCommand(cmd);
        }
        if (restore) {
            this.activeItemId = null;
            this.activeSourceElId = null;
        }
    }

    handleCommand(cmd) {
        console.log(cmd);
        switch (cmd.type) {
        case commands.runAction.name:
            this.runAction(cmd.name, cmd.args);
            break;
        case commands.goToSituation.name:
            this.goTo(cmd.id);
            break;
        case commands.write.name:
            this.performWrite(cmd);
            break;
        case commands.replace.name:
            this.performReplace(cmd);
            break;
        default:
            throw new Error("Unknown command: " + cmd);
        }
    }

    performWrite({itemId, snippetId}) {
        this.ui.bus.$emit('write', {
            'itemId': itemId,
            'html': this.getSnippetHTML(snippetId),
        });
    }

    performReplace({itemId, snippetId, elId}) {
        this.ui.bus.$emit('replace', {
            'itemId': itemId,
            'id': elId,
            'tag': this.getSnippetWrapperTag(snippetId),
            'html': this.getSnippetHTML(snippetId),
        });
    }

    runAction(name, args) {
        this.willAct(this.model, this.ui, this.model.currentSituation, name, ...args);
        this.model.currentSituation.doAct(this.model, this.ui, name, ...args);
        this.didAct(this.model, this.ui, this.model.currentSituation, name, ...args);
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
        if (!next.willEnter(this.model, this.ui, previousId, id)) {
            return;
        }

        this.model.currentSituation = next;
        next.doEnter(this.model, this.ui, this, previous);
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

function parseAction(s) {
    return s.split(':');
}

function commandsFromString(str, itemId = null, elId = null) {
    str = window.decodeURIComponent(str);
    return str.split(';')
        .map((s) => {
            if (s.startsWith('@')) {
                return commands.goToSituation.create(s.slice(1))
            }
            if (s.startsWith('>')) {
                const nameAndArgs = parseAction(s.slice(1));
                const name = nameAndArgs[0];
                const args = _.tail(nameAndArgs);
                switch (name) {
                case 'write': return commands.write.create(itemId, args[0]);
                case 'replace': return commands.replace.create(itemId, args[0], args[0]);
                case 'replaceself': return commands.replace.create(itemId, args[0], elId);
                default: return commands.runAction.create(name, args);
                }
            }
            return null;
        })
        .filter((cmd) => cmd !== null);
}

export default JumboGroveDirector;