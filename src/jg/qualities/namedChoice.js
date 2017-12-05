/**
 * Simple transform of one value to another.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 'foo',  // anything
 *    labelMap: {'foo': 'bar'},  // renders 'foo' as 'bar'
 * }
 */
const namedChoice = {
    format: (character, quality, value) => {
        return quality.labelMap[value];
    },
};
export default namedChoice;