const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    if (Boolean(str) === false) return str;
    let ans = '', freq = 0;
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && str[i] !== str[i - 1]) {
            ans += `${freq === 1 ? '' : freq}${str[i - 1]}`;
            freq = 0;
        }
        freq++;
    }
    ans += `${freq === 1 ? '' : freq}${str[str.length - 1]}`;
    return ans;
}

module.exports = {
    encodeLine
};
