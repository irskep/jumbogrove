import _ from 'lodash';
/**
 * Map an integer value to a word list, with optional offset.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 0,  // a number
 *    words: ['bad', 'ok', 'good'],
 *    offset: 0  // rendered text = words[value + offset]
 * }
 */
const wordScale = {
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
};
export default wordScale;