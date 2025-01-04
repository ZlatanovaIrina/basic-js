const { NotImplementedError } = require('../extensions/index.js');

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

  const controlSequence = 
  [
    DISCARD_PREV, 
    DISCARD_NEXT, 
    DOUBLE_PREV,
    DOUBLE_NEXT
  ] = 
  [
    '--discard-prev',
    '--discard-next',
    '--double-prev',
    '--double-next'
  ];

  if (!(arr instanceof Array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  if (arr.every((value) => controlSequence.every(($) => $ !== value))) {
    return arr;
  }

  const transformed = [];

  arr.forEach((value) => {

    if (transformed.length === 0) {
      transformed.push(value);  
      return;
    }

    const lastValue = transformed[transformed.length - 1];

    if (controlSequence.includes(lastValue)) {

      transformed.pop();

      if (lastValue === DISCARD_PREV) {
        transformed[transformed.length - 1] = undefined;
      }
      if (lastValue === DISCARD_NEXT) {
        transformed.push(undefined);
        return;
      }
      if (lastValue === DOUBLE_PREV) {
        transformed.push(transformed[transformed.length - 1]);
      }
      if (lastValue === DOUBLE_NEXT) {
        transformed.push(value);
      }
    }

    transformed.push(value);
  });

  return transformed.filter(($) => $ && !controlSequence.includes($));
  
}

module.exports = {
  transform
};
