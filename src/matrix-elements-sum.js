const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  const transposeMatrix = matrix
    .reduce((newMatr, currentRow) => {
      currentRow.forEach((digit, index, arr) => {
        if (!!newMatr[index] === false) {
          newMatr[index] = [digit];
        } else {
          newMatr[index].push(digit);
        }
      })
      return newMatr;
    }, []);
  
  const getSumOfDigits = (arr) => {
    if (arr.length === 0) {
      return 0;
    }
    return arr.reduce((a, b) => a + b);
  }
  
  const sumBeforeFirstZero = 
    getSumOfDigits(transposeMatrix.map((arr) => {
      let partBeforeFirstZero = arr;

      if (arr.indexOf(0) !== -1) {
        partBeforeFirstZero = arr.slice(0, arr.indexOf(0));
      }
      
      return getSumOfDigits(partBeforeFirstZero);
    }));

  return sumBeforeFirstZero;

}

module.exports = {
  getMatrixElementsSum
};
