const { NotImplementedError } = require('../extensions/index.js');


/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  const digitsString = n.toString();

  if (digitsString.length === 2) {
    return parseInt(Math.max(...[...digitsString]));
  }

  const maxDigit = Math.max(...[...digitsString.substring(1)]);
  const nWithoutTailAfterMax = digitsString.substring(0, digitsString.indexOf(maxDigit, 1));
  const minDigitBeforeMax = Math.min(...[...nWithoutTailAfterMax]);
  const nWithoutMinBeforeMax = parseInt(digitsString.replace(minDigitBeforeMax, ''));

  return nWithoutMinBeforeMax;
}

module.exports = {
  deleteDigit
};
