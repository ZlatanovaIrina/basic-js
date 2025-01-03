const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const EXCLUDE = -1;
  const sortedArrWithoutExclude = arr
    .filter((value) => value !== EXCLUDE)
    .sort((value1, value2) => value1 - value2)

  let index = -1;
  return arr.map((value) => {
    if (value === EXCLUDE) {
      return value;
    }
    index += 1;
    return sortedArrWithoutExclude[index];
  });

}

module.exports = {
  sortByHeight
};
