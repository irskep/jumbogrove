/**
 * If `value` is true, some text appears. Otherwise, no text appears.
 * @type {Quality}
 * @example
 * {
 *    initialValue: true|false,
 *    name: 'This text appears in the sidebar if true, otherwise nothing'
 * }
 */
const flag = {
    isVisible: (character, quality, value) => !!value,
    isLabeled: (character, quality, value) => false,
    format: (character, quality, value) => {
        return value ? quality.name : '';
    },
};
export default flag;