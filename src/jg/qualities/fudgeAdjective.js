import wordScale from "./wordScale";
/**
 * Shortcut for `wordScale` with a word list of 'terrible', 'poor', 'mediocre', 'fair', 'good', 'great', 'superb'
 * where -3 = terrible, 0 = fair, and 3 = superb.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 0,  // a number
 * }
 */
const fudgeAdjective = {
    format: (character, quality, value) => {
        return wordScale.format(
            character,
            {
                ...quality,
                offset: 3,
                words: ['terrible', 'poor', 'mediocre', 'fair', 'good', 'great', 'superb'],
            },
            value);
    },
};
export default fudgeAdjective;