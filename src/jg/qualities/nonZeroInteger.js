/**
 * Same as `integer`, but doesn't appear in sidebar if equal to zero.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 0,  // a number
 * }
 */
const nonZeroInteger = {
    isVisible: (character, quality, value) => !!value,
    format: (character, quality, value) => {
        if (value === 0) return '';
        return Math.floor(value).toString();
    },
};
export default nonZeroInteger;