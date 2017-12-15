import _ from 'lodash';
import WorldModel from './model';
import commands from "./commands";
import { bindGamepad } from "./gamepad";

const getAnchors = () => {
  return _.toArray(document.querySelectorAll('a'))
    .filter((a) => !!a.attributes.href.value)
    .filter((a) => !!a.offsetParent);
};

const focus = (allAnchors, i) => {
  const i2 = (i + allAnchors.length) % allAnchors.length;
  allAnchors[i2].focus();
};

const focusNextElement = () => {
  const allAnchors = getAnchors();
  if (!allAnchors.length) return;
  const i = allAnchors.indexOf(document.activeElement);
  if (i > -1) {
    focus(allAnchors, i + 1);
  } else {
    allAnchors[0].focus();
  }
};

const focusPreviousElement = () => {
  const allAnchors = getAnchors();
  if (!allAnchors.length) return;
  const i = allAnchors.indexOf(document.activeElement);
  if (i > -1) {
    focus(allAnchors, i - 1);
  } else {
    allAnchors[allAnchors.length - 1].focus();
  }
};

const nop = () => { };
/** @ignore */
class JumboGroveDirector {
    constructor({
        id,
        version = 1,
        initialSituation = 'start', 
        navHeader = '',
        asideHeader = '',
        showNav = true,
        showAside = true,
        defaultStylesheet = true,
        autoScroll = true,
        autoMoveFocus = true,
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
            navHeader, asideHeader, init, showNav, showAside, defaultStylesheet, autoScroll,
            autoMoveFocus,
        });
        this.modelArgs = {characters, globalState, situations, initialSituation, version};

        this.recreateModel();
        this.interactive = true;
    }

    recreateModel() {
        this.model = new WorldModel(this, this.modelArgs);
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
        this.init(this.model, this.ui, wasBound);
    }

    start() {
        if (this.model.currentSituation) {
            return;  // vue.js is hot-reloading us
        }
        if (!this.load()) {
            this.goTo(this.model._initialSituationId);
        }
        bindGamepad(this);
    }

    save(toSituationId) {
        const saveId = `${this.id}-${this.version}`; 
        localStorage[saveId] = JSON.stringify({toSituationId, model: this.model.toSave()});
    }
    
    load() {
        const saveId = `${this.id}-${this.version}`; 
        if (!localStorage[saveId]) return false;
        let json = null;
        try {
            json = JSON.parse(localStorage[saveId]);
        } catch (e) {
            return false;
        }
        if (!json.model) return false;
        if (!json.toSituationId) return false;

        try {
            this.model.loadSave(json.model);
            this.goTo(json.toSituationId, true);
        } catch (e) {
            delete localStorage[saveId];
            this.recreateModel();
            this.start();
            return false;
        }
        return true;
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
        // console.log(cmd);
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
        case commands.resetGame.name:
            this.performResetGame(cmd);
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

    performResetGame() {
        const saveId = `${this.id}-${this.version}`; 
        delete localStorage[saveId];
        location.reload();
    }

    goTo(id, isFromLoad = false) {
        const next = this.model.situation(id);
        const previous = this.model.currentSituation;
        const previousId = previous ? previous.id : null;
        if (next.autosave && !isFromLoad) {
            this.save(id);
            this.ui.writeMarkdown('> Game saved.\n')
        }
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

    focusNextElement() { if (this.autoMoveFocus) focusNextElement(); }
    focusPreviousElement() { if (this.autoMoveFocus) focusPreviousElement(); }
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
                switch (name.toLowerCase()) {
                case 'write': return commands.write.create(itemId, args[0]);
                case 'replace': return commands.replace.create(itemId, args[0], args[0]);
                case 'replaceself': return commands.replace.create(itemId, args[0], elId);
                case 'resetgame': return commands.resetGame.create();
                default: return commands.runAction.create(name, args);
                }
            }
            return null;
        })
        .filter((cmd) => cmd !== null);
}

export default JumboGroveDirector;