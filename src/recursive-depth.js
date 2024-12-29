const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
  
  depth = 1;

  setDepth(depth) {
    this.depth = depth;
  }

  getDepth() {
    return this.depth;
  }

  calculateDepth(arr) {
    if (arr.every((item) => !Array.isArray(item))) {
      const result = this.getDepth();
      this.setDepth(1);
      return result;
    }

    this.setDepth(this.depth + 1);
    return this.calculateDepth(arr.flat());
  }
}

module.exports = {
  DepthCalculator
};
