const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }

    const newArr = [], DOUBLE_NEXT = '--double-next', DOUBLE_PREV = '--double-prev', DISCARD_NEXT = '--discard-next',
        DISCARD_PREV = '--discard-prev';

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case DOUBLE_NEXT:
                if (i !== arr.length - 1) {
                    newArr.push(arr[i + 1]);
                }
                break;
            case DOUBLE_PREV:
                if (i !== 0 && arr[i - 2] !== DISCARD_NEXT) {
                    newArr.push(arr[i - 1]);
                }
                break;
            case DISCARD_NEXT:
                if (i !== arr.length - 1) {
                    i++;
                }
                break;
            case DISCARD_PREV:
                if (i !== 0 && arr[i - 2] !== DISCARD_NEXT) {
                    newArr.pop();
                }
                break;
            default:
                newArr.push(arr[i]);
        }
    }

    return newArr;
}

module.exports = {
    transform
};
