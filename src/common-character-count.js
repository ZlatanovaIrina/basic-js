const { NotImplementedError } = require('../extensions/index.js');

/** **/

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

// function getCommonCharacterCount(s1, s2) {

//   const regexp = new RegExp(`[${s2.split('').join('*')}]`, 'g');

//   console.log('s1: ', s1);
//   console.log('s2: ', s2);

//   console.log('mtch: ', [...s1.matchAll(regexp)]);
  


//   return [...s1.matchAll(regexp)].length;
// }

//  *First solution

const getCharsCountMap = (str) => {
  return [...str].reduce((charCountMap, char) => {
    if (charCountMap.has(char)) {
      charCountMap.set(char, charCountMap.get(char) + 1);
      return charCountMap;
    }
    charCountMap.set(char, 1);
    return charCountMap;
  }, new Map());
}

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const map1 = getCharsCountMap(s1);
  const map2 = getCharsCountMap(s2);

  const result = [...map1].reduce((commonsCount, charCountPair) => {
    const map1Char = charCountPair[0]
    const map1CharCount = charCountPair[1]
    const map2CharCount = map2.get(map1Char);
  
    if (map2CharCount === undefined) {
      return commonsCount;
    }
    commonsCount += Math.min(map1CharCount, map2CharCount);
    return commonsCount;
  }, 0);

  return result;
}
/********************************/

module.exports = {
  getCommonCharacterCount
};
