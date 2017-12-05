/**
 * Displays `on`/`off` based on `value` truthiness (if no `words` provided), or
 * `words[0]`/`words[1]` (falsey word comes first)
 * @type {Quality}
 * @example
 * {
 *    initialValue: true|false,
 *    words: ['nope', 'yep']
 * }
 */
const onOff = {
  format: (character, quality, value) => {
    const words = quality.words || ['off', 'on'];
    return words[value ? 1 : 0];
  },
};
export default onOff;