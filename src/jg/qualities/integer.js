/**
 * Decimals are truncated from the value when displaying.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 0,  // a number
 * }
 */
const integer = {
    format: (character, quality, value) => Math.floor(value).toString(),
};
export default integer;