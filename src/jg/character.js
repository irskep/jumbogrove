import _ from 'lodash';
import qualities from "./qualities";

const _prioritySort = ({priority}) => priority || 0;
const _groupOmitKeys = ['id', 'name', 'priority', 'hidden'];
export default class Character {
    constructor({qualities, id, name, priority = 0, showInSidebar = true, description = '', state = {}}) {
        Object.assign(this, {
            id, name, qualities, description, showInSidebar, priority,
            state: _.cloneDeep(state)});

        this._shallowQualities = {};
        Object.keys(qualities).forEach((k) => {
            const group = qualities[k];
            group.id = k;
            for (const k2 of _.keys(_.omit(group, _groupOmitKeys))) {
                if (this._shallowQualities[k2]) {
                    throw Error("You have two qualities with the same ID. Please don't do that.")
                }
                group[k2].id = k2;
                this._shallowQualities[k2] = group[k2];
                group[k2].value = group[k2].initialValue;
            }
        });

        this.sortedQualityGroups = _.sortBy(Object.values(qualities), _prioritySort);
    }

    toSave() {
        return _.pick(this, ['id', 'qualities', 'name', 'showInSidebar', 'description', 'state']);
    }

    loadSave(obj) {
        _.assign(this, obj);
    }

    getDescription() {
        if (_.isFunction(this.description)) {
            return this.description.apply(this, arguments);
        } else {
            return this.description || this.id;
        }
    }

    sortedQualities(groupName) {
        return _.sortBy(Object.values(_.omit(this.qualities[groupName], _groupOmitKeys)), _prioritySort);
    }

    formatQuality(name) {
        const quality = this._shallowQualities[name];
        if (!qualities[quality.type]) {
            console.error("Undefined quality type:", quality.type);
            return '';
        }
        return qualities[quality.type].format(this, quality, quality.value);
    }

    formatQualityName(name) {
        const quality = this._shallowQualities[name];
        return quality.name;
    }

    setQuality(name, value) {
        this._shallowQualities[name].value = value;
    }

    addToQuality(name, delta) {
        this._shallowQualities[name].value += delta;
    }
}