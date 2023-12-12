const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    const MAC_LENGTH = 17;
    if (n.length !== MAC_LENGTH) {
        return false;
    }
    for (let i = 0; i < n.length; i++) {
        const currChar = n[i];
        if ((i + 1) % 3 === 0) {
            if (currChar !== '-') {
                return false;
            }
        } else {
            if (!((currChar >= '0' && currChar <= '9') || (currChar >= 'A' && currChar <= 'F'))) {
                return false;
            }
        }
    }
    return true;
}
module.exports = {
  isMAC48Address
};
