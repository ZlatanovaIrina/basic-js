const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  const {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;

  const makeSeparatedRepeatedString = (str, repeatTimes, separator) => {
    return Array.from({length: repeatTimes}, (item) => String(str))
    .join(separator)
  }

  const additionString = makeSeparatedRepeatedString(addition, additionRepeatTimes, additionSeparator);
  const mainString = makeSeparatedRepeatedString(`${str}${additionString}`, repeatTimes, separator);

  return mainString;

}

module.exports = {
  repeater
};
