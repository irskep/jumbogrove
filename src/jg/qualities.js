import _ from 'lodash';

const qualities = {
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
                return _.last(quality.words) + '+' + (
                    offsetValue - quality.words.length + 1);
            } else if (offsetValue < 0 && quality.useBonuses) {
                return quality.words[0] + offsetValue;
            } else {
                return ''
            }
        },
    },
    fudgeAdjective: {
        format: (character, quality, value) => {
            return qualities.wordScale.format(
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
            return qualities.onOff.format(character, {words: ['no', 'yes']}, value);
        }
    },
    namedChoice: {
        format: (character, quality, value) => {
            return quality.labelMap[value];
        },
    },
};
export default qualities;