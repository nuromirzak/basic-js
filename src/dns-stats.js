const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let ans = {};

  for (const domain of domains) {
    let dns = '', start = domain.length;

    for (let i = domain.length - 1; i >= 0; i--) {
      const currChar = domain[i];
      if (currChar === '.') {
        const part = domain.substring(i + 1, start);
        dns += '.' + part;
        ans[dns] ??= 0;
        ans[dns]++;
        start = i;
      }
    }

    const part = domain.substring(0, start);
    dns += '.' + part;
    ans[dns] ??= 0;
    ans[dns]++;
  }

  return ans;
}

module.exports = {
  getDNSStats
};
