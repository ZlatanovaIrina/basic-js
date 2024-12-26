const { NotImplementedError } = require('../extensions/index.js');

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

  return [...str].reduce((encoding, currentChar, index, array) => {
    
    const lastEncoded = encoding[encoding.length - 1];
    
    if (index === 0) {
      return encoding.concat([[1, currentChar]]);
    }

    if (lastEncoded[1] === currentChar) {
      lastEncoded[0] += 1;
      return encoding;
    }

    return encoding.concat([[1, currentChar]]);

  }, [])
  .map(([count, char]) => [count > 1 ? count : '', char])
  .flat()
  .join('');
}

module.exports = {
  encodeLine
};
