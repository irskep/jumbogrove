/**
 * Simple transform of one value to another.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 0,  // anything
 *    labelMap: {'foo': 'bar'},
 * }
 */
const namedChoice = {
    format: (character, quality, value) => {
        return quality.labelMap[value];
    },
};
export default namedChoice;