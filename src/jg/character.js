import _ from 'lodash';

const QUALITIES = {
    flag: {
        format: (character, quality, value) => {
            return value ? quality.name : '';
        },
    },
    wordScale: {
        format: (character, quality, value) => {
            if (!quality.words) return '';
            let offsetValue = value;
            if (quality.offset) offsetValue += quality.offset;
            if (offsetValue >= 0 && offsetValue < quality.words.length) {
                return quality.words[offsetValue];
            } else if (offsetValue >= quality.words.length && quality.useBonuses) {
                return _.last(quality.words) + '+' + (offsetValue - quality.words.length + 1);
            } else if (offsetValue < 0 && quality.useBonuses) {
                return quality.words[0] + offsetValue;
            } else {
                return ''
            }
        },
    },
    fudgeAdjective: {
        format: (character, quality, value) => {
            return QUALITIES.wordScale.format(
                character,
                {
                    ...quality,
                    offset: 3,
                    words: ['terrible', 'poor', 'mediocre', 'fair', 'good', 'great', 'superb'],
                },
                value);
        },
    },
    integer: {
        format: (character, quality, value) => Math.floor(value).toString(),
    },
    nonZeroInteger: {
        format: (character, quality, value) => {
            if (value === 0) return '';
            return Math.floor(value).toString();
        },
    },
    raw: {
        format: (character, quality, value) => value,
    },
    onOff: {
        format: (character, quality, value) => {
            const words = quality.words || ['off', 'on'];
            return words[value ? 1 : 0];
        },
    },
    yesNo: {
        format: (character, quality, value) => {
            return QUALITIES.onOff.format(character, {words: ['no', 'yes']}, value);
        }
    },
};

const _prioritySort = ({priority}) => priority || 0;
const _groupOmitKeys = ['id', 'name', 'priority', 'hidden'];
export default class Character {
    constructor({qualities, id, name, priority = 0, showInSidebar = true, description = '', state = {}}) {
        Object.assign(this, {id, name, qualities, description, showInSidebar, priority, state: _.cloneDeep(state)});

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
        if (!QUALITIES[quality.type]) {
            console.error("Undefined quality type:", quality.type);
            return '';
        }
        return QUALITIES[quality.type].format(this, quality, quality.value);
    }

    setQuality(name, value) {
        this._shallowQualities[name].value = value;
    }
}