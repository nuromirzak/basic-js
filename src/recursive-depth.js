const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;

        for (let i = 0; i < arr.length; i++) {
            const curr = arr[i];

            if (Array.isArray(curr)) {
                const currDepth = this.calculateDepth(curr);
                depth = Math.max(depth, currDepth);
            }
        }

        return depth + 1;
    }
}

module.exports = {
    DepthCalculator
};
