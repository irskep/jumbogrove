/**
 * @module model
 * @memberof module:jumbogrove
 */
import _ from 'lodash';
import Character from './character';
import Situation from './situation';

/**
 * Maintains game state and allows you to make changes to it.
 * 
 * The model object is the primary way for you to interact with Jumbo Grove.
 */
export default class model {
    /**
     * @ignore
     * 
     * @param {object} args Arguments object
     * @param {object[]} args.characters
     * @param {object} args.globalState
     * @param {object[]} args.situations
     * @param {string} args.initialSituation
     */
    constructor(director, {characters, globalState, situations, initialSituation}) {
        /** @ignore */
        this._director = director;
        /** @ignore */
        this._characters = {};
        /** @ignore */
        this._situations = {};
        /** @ignore */
        this._initialSituationId = initialSituation;
        /** @ignore */
        this.templateHelperFunctions = {};
        /** @ignore */
        this.templateHelperGetters = {};

        // These will be injected when the UI is bound to the director
        /** @ignore */
        this.navHeaderHTML = null;
        /** @ignore */
        this.asideHeaderHTML = null;

        /**
         * The situation currently being run, or last seen by the user.
         * @member
         * @type {Situation|null} */
        this.currentSituation = null;

        characters.forEach((c) => this._characters[c.id] = new Character(c));

        /**
         * Store all non-character game state here; **Must be JSON-safe!** You may mutate
         * this object freely as long as it is safe to convert it to JSON and back.
         * @member
         * 
         */
        this.globalState = _.cloneDeep(globalState);

        /**
         * The character with ID `'player'`.
         * @member
         * @type {Character|null} */
        this.player = this.character('player') || null;

        situations.forEach((s) => {
            if (this._situations[s.id]) throw new Error(`Duplicate situation id: ${s.id}`);
            this._situations[s.id] = new Situation(s);
        });

        /**
         * List of all characters in the game.
         * @member
         * @type {Character[]} */
        this.allCharacters = _.sortBy(Object.values(this._characters), ({priority}) => priority || 0);
    }

    /**
     * Follow a Jumbo Grove link (`@situation-id` or `>action`).
     * @param {command} string
     */
    do(...args) {
        return this._director.handleCommandString(...args);
    }

    /**
     * Go to the given sitaution (no `@`).
     * @param {string} id
     */
    goTo(...args) {
        return this._director.goTo(...args);
    }

    /**
     * Returns true iff the given string can be handled by Jumbo Grove (rather than being a normal HTML link)
     * @param {string} string A string to check
     * @returns {Boolean} 
     */
    isManagedLink(...args) {
        return this._director.isManagedLink(...args);
    }

    /**
     * Add arbitrary methods to the model object. Since the model is passed to
     * all callbacks, this is a good way to make convenient functions accessible.
     * 
     * Also, anything you pass here will also be provided to the template context.
     * 
     * @param {Map<string, function>} fns Mapping of name to function
     */
    extend(fns) {
        Object.assign(this, fns);
        Object.assign(this.templateHelperFunctions, fns);
    }

    /**
     * Make dynamically-evaluated values available to templates.
     * 
     * For example, if you do this:
     * 
     * ```
     * model.addTemplateGetters({minutes: () => new Date().getMinutes()});
     * ```
     * 
     * then whenever you write `<%= minutes %>` in your template, the return
     * value of the function will appear in the text.
     * 
     * @param {Map<string, function>} fns Mapping of name to getter
     */
    addTemplateGetters(fns) {
        Object.assign(this.templateHelperGetters, fns);
    }

    /**
     * @ignore
     */
    toSave() {
        return {
            globalState: this.globalState,
            currentSituationId: this.currentSituation ? this.currentSituation.id : null,
            characters: this.allCharacters.map((c) => c.toSave()),
            situations: Object.values(this._situations).map((s) => s.toSave()),
        };
    }

    /**
     * @ignore
     */
    loadSave(obj) {
        this.globalState = obj.globalState;
        this.currentSituation = this._situations[obj.currentSituationId] || null;
        for (const data of obj.characters) {
            this.character(data.id).loadSave(data);
        }
        for (const s of obj.situations) {
            this.situation(s.id).loadSave(s);
        }
    }

    /**
     * @ignore
     */
    toString() {
        return `Model(globalState=${this.globalState}, characters=${this.characters})`;
    }

    /**
     * Looks up a situation by ID. Prints an error to the console if there isn't one.
     * @param {string} id 
     * @returns {Situation|null} Situation with the given ID
     */
    situation(id) {
        if (!this._situations[id]) console.error(`Situation not found: ${id}`);
        return this._situations[id];
    }

    /**
     * Returns a list of all situations matching the given ID (`foo`) or tag (`#foo`).
     * @param {string} idOrTag 
     * @returns {Situation[]}
     */
    situations(idOrTag) {
        if (idOrTag.startsWith("#")) {
            const tag = idOrTag.slice(1);
            return Object.values(this._situations)
                .filter((s) => s.tags.indexOf(tag) !== -1);
        } else {
            return [this._situations[idOrTag]];
        }
    }

    /**
     * Look up a character by ID. Returns `undefined` if there isn't one.
     * @param {string} id 
     */
    character(id) {
        return this._characters[id];
    }

    /**
     * Return a random number 0-1. Currently this just calls `Math.random()`, but
     * in the future it might do something fancy with seeds that let you avoid
     * save scumming.
     */
    random() {
        return Math.random();
    }

    /**
     * Given a set of situations, do some smart stuff and return the situations
     * that match the filter.
     * 
     * 1. Filter out all situations for which `situation.getCanSee(model, model.currentSituation, situation)` returns `false`.
     * 2. Find the highest priority that matches a list of situations at least as long as `atLeast`.
     * 3. If there are more situations left than there are `atMost`, randomly remove some.
     * 4. Sort by `situation.displayOrder`.
     * 
     * Note that it is possible to end up with a list of situations for which `getCanChoose()` returned `false` for all of them!
     * 
     * This logic has been shamelessly stolen from Undum.
     * 
     * @param {string[]} arrayOfSituationIdsOrTags Like `['one-situation', '#situations-matching-this-tag']`
     * @param {number} atLeast 
     * @param {number} atMost 
     */
    interpretChoices(arrayOfSituationIdsOrTags, atLeast = 0, atMost = Number.MAX_VALUE) {
        const host = this.currentSituation;
        if (host.debugChoices) debugger;  // eslint-disable-line no-debugger
        const situations = [].concat.apply(
            [], arrayOfSituationIdsOrTags.map(this.situations.bind(this)));
        // remove invisible situations
        const visibleSituations = situations.filter((s) => s.getCanSee(this, host, s));

        // sort by display order
        const sortedSituations = _.sortBy(
            visibleSituations, (s) => s.getDisplayOrder(this, host));

        // index by priority; figure out what priorities are being used
        const sortedSituationsByPriority = {};
        const prioritiesSeen = [];
        for (const s of sortedSituations) {
            const p = s.getPriority(this, host);
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
            const i = Math.floor(this.random() * chosenSituations.length);
            chosenSituations.splice(i, 1);
        }

        // return the chosen situations and provide more info for each
        const allChoices = chosenSituations.map((s) => {
            return {
                situationId: s.id,
                text: s.getOptionText(this, host),
                isEnabled: s.getCanChoose(this, host),
            };
        });
        return allChoices.filter(({isEnabled}) => isEnabled).concat(allChoices.filter(({isEnabled}) => !isEnabled));
    }
}