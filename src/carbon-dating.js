const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const isValid = (value) => {
  if (typeof value !== 'string') {
    return false;
  }

  const valueToFloat = Number.parseFloat(value);
  
  if (!!valueToFloat === false) {
    return false;
  }

  if (valueToFloat < 0) {
    return false;
  }

  if (valueToFloat > MODERN_ACTIVITY) {
    return false;
  }
  return true;
}

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if (!isValid(sampleActivity)) {
    return false;
  }

  const sampleActivityToFloat = parseFloat(sampleActivity);
  const constantForTheReaction = Math.LN2 / HALF_LIFE_PERIOD;
  const modernToSampleActivityRatio = MODERN_ACTIVITY / sampleActivityToFloat;
  const ageOfTheSample = Math.ceil(Math.log(modernToSampleActivityRatio) / constantForTheReaction);

  return(ageOfTheSample);
}

module.exports = {
  dateSample
};
