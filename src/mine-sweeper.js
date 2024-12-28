// class MatrixCell {

//   setCell(cell) {
//     this.cell = cell;
//   }
//   setSiblings(siblingArray = []) {
//     [
//      this.top, 
//      this.topRight, 
//      this.right,
//      this.bottomRight,
//      this.bottom,
//      this.bottomLeft,
//      this.left,
//      this.topLeft
//     ] = siblingArray;
//   }
//   getSiblings() {
//     return [
//       this.top, 
//       this.topRight, 
//       this.right,
//       this.bottomRight,
//       this.bottom,
//       this.bottomLeft,
//       this.left,
//       this.topLeft
//      ];
//   }

// }
const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const getNumberOfMinesAroundCell = (matrix, index1, index2) => {

    const cellSiblings = [
      matrix[index1 - 1] ? matrix[index1 - 1][index2] : undefined,
      matrix[index1 - 1] ? matrix[index1 - 1][index2 + 1] : undefined,
      matrix[index1] ? matrix[index1][index2 + 1] : undefined,
      matrix[index1 + 1] ? matrix[index1 + 1][index2 + 1] : undefined,
      matrix[index1 + 1] ? matrix[index1 + 1][index2] : undefined,
      matrix[index1 + 1] ? matrix[index1 + 1][index2 - 1] : undefined,
      matrix[index1] ? matrix[index1][index2 - 1] : undefined,
      matrix[index1 - 1] ? matrix[index1 - 1][index2 - 1] : undefined
    ];
    
    return cellSiblings
      .map((sibling) => sibling === true ? 1 : 0)
      .reduce((sibling1, sibling2) => sibling1 + sibling2);
  }
  
  return matrix.map((arr, index1, matrix) => {
    return arr.map((el, index2, arr) => {
        return (getNumberOfMinesAroundCell(matrix, index1, index2));
    });
  });
}

module.exports = {
  minesweeper
};
