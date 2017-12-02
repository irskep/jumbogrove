import _ from 'lodash';
import Character from './character';

export default class WorldModel {
    constructor({characters, globalState}) {
        this._characters = {};
        this.currentSituation = null;
        characters.forEach((c) => this._characters[c.id] = new Character(c));
        this.globalState = _.cloneDeep(globalState);
        this.player = this.character('player') || null;

        // These will be injected when the UI is bound to the director
        this.navHeaderHTML = null;
        this.asideHeaderHTML = null;

        this.allCharacters = _.sortBy(Object.values(this._characters), ({priority}) => priority || 0);
    }

    toString() {
        return `Model(globalState=${this.globalState}, characters=${this.characters})`;
    }

    /*
    goTo(id) is injected into this class by JumboGroveDirector.
    */

    /*
    handleCommandString(str) is injected into this class by JumboGroveDirector.
    */

    character(id) {
        return this._characters[id];
    }

    random() {
        return Math.random();
    }
    
    setGlobalState(k, v) {
        this.globalState[k] = v;
    }

    setCharacterState(id, k, v) {
        this.character(id)[k] = v;
    }
}