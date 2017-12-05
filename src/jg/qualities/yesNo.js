import onOff from "./onOff";
/**
 * Same oas `onOf`, but defaults to `yes` / `no`.
 * @type {Quality}
 * @example
 * {
 *    initialValue: true|false,
 * }
 */
const yesNo = {
  format: (character, quality, value) => {
    return onOff.format(character, {words: ['no', 'yes']}, value);
  },
};
export default yesNo;