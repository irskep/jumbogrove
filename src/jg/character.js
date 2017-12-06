import _ from 'lodash';
import qualities from "./qualities/index";

const _prioritySort = ({priority}) => priority || 0;
const _groupOmitKeys = ['id', 'name', 'priority', 'hidden'];

/**
 * This class is created from the character object you specify in your game.
 */
export default class Character {
    /**
     * 
     * @param {object} args 
     * @param {string} args.id
     * @param {string} args.name
     * @param {number} args.priority
     * @param {Boolean} args.showInSidebar
     * @param {string|function(): string} args.description Currently unused
     * @param {quality[]} args.qualities
     * @param {*} args.state Initial value of {@link state}
     */
    constructor({qualities, id, name, priority = 0, showInSidebar = true, description = '', state = {}}) {
        /**
         * The ID you specified for this character. Must be unique across all characters.
         * @type {string}
         */
        this.id = id;

        /**
         * The name you specified for this character.
         * @type {string}
         */
        this.name = name;

        /**
         * Arbitrary, JSON-safe data about this character. You may update it any time you want.
         * @type {*}
         */
        this.state = _.cloneDeep(state); 

        Object.assign(this, {qualities, description, showInSidebar, priority});

        this.updateQualities()
    }

    /** @ignore */
    updateQualities() {
        this._shallowQualities = {};
        Object.keys(this.qualities).forEach((k) => {
            const group = this.qualities[k];
            group.id = k;
            for (const k2 of _.keys(_.omit(group, _groupOmitKeys))) {
                if (this._shallowQualities[k2]) {
                    throw Error("You have two qualities with the same ID. Please don't do that.")
                }
                group[k2].id = k2;
                this._shallowQualities[k2] = group[k2];
                if (group[k2].value === undefined) group[k2].value = group[k2].initialValue;
            }
        });
        /** @ignore */
        this.sortedQualityGroups = _.sortBy(Object.values(this.qualities), _prioritySort);
    }

    /** @ignore */
    toSave() {
        return _.pick(this, ['id', 'qualities', 'name', 'showInSidebar', 'description', 'state']);
    }

    /** @ignore */
    loadSave(obj) {
        _.assign(this, obj);
        this.updateQualities();
    }

    /** @ignore */
    getDescription() {
        if (_.isFunction(this.description)) {
            return this.description.apply(this, arguments);
        } else {
            return this.description || this.id;
        }
    }

    /** @ignore */
    sortedQualities(groupName) {
        return _.sortBy(Object.values(_.omit(this.qualities[groupName], _groupOmitKeys)), _prioritySort);
    }

    /**
     * Return the current value of this quality (without formatting it)
     * 
     * @param {string} id ID of the quality whose value you want
     * @returns {*}
     */
    getQuality(id) {
        return this._shallowQualities[id].value;
    }

    /**
     * Return the _initial_ value of this quality from the start of the game(without formatting it).
     * You can use this to see how the value has changed since the start of the game.
     * 
     * @param {string} id ID of the quality whose value you want
     * @returns {*}
     */
    getQualityInitial(id) {
        return this._shallowQualities[id].initialValue;
    }

    /**
     * Returns the formatted value of the given quality.
     * 
     * @param {string} id ID of the quality whose value you want
     * @returns {string}
     */
    formatQuality(id) {
        const quality = this._shallowQualities[id];
        if (!qualities[quality.type]) {
            console.error("Undefined quality type:", quality.type);
            return '';
        }
        return qualities[quality.type].format(this, quality, quality.value);
    }

    /**
     * Return the human-readable name for the given quality ID.
     * 
     * @param {string} id ID of the quality whose value you want
     * @returns {string}
     */
    formatQualityName(id) {
        const quality = this._shallowQualities[id];
        return quality.name;
    }

    /**
     * Qualities **must** be modified using this method.
     * 
     * @param {string} id ID of the quality to modify on this character
     * @param {*} value New value for the quality
     */
    setQuality(id, value) {
        this._shallowQualities[id].value = value;
    }

    /**
     * Add an integer value to the given quality.
     * 
     * @param {string} id ID of the quality to modify on this character
     * @param {number} value Amount to add
     * @returns {number} The new value
     */
    addToQuality(id, delta) {
        this._shallowQualities[id].value += delta;
        return this._shallowQualities[id].value += delta;
    }
}