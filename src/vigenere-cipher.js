const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabetCharObject = [...this.alphabet.toUpperCase()].reduce((obj, currentChar, index, array) => {
    obj[currentChar] = index;
    return obj;
  }, {});
  alphabetIndexObject = [...this.alphabet.toUpperCase()].reduce((obj, currentChar, index, array) => {
    obj[index] = currentChar;
    return obj;
  }, {});

  constructor(direct = true) {
    this.direct = direct;
  }

  static checkArgs(args) {
    if ([...args].some(($) => !$) || args.length < 2) {
      throw new Error('Incorrect arguments!');
    }
  }

  static getPaddedForLengthKey(key, length) {
    while(key.length < length) {
      key = key.repeat(2);
    }
    return key.slice(0, length);
  }

  encrypt(message, key) {

    VigenereCipheringMachine.checkArgs(arguments);

    const messageUpperCase = message.toUpperCase();
    const paddedKey = VigenereCipheringMachine.getPaddedForLengthKey(key, messageUpperCase.length);
    const keyUpperCase = paddedKey.toUpperCase();

    let keyUpperCaseIndex = 0;

    let result = [...messageUpperCase]
      .map((char) => {
 
        if (!(char in this.alphabetCharObject)) {
          return char;
        }

        const encryptedCharIndex = (this.alphabetCharObject[char] + this.alphabetCharObject[keyUpperCase[keyUpperCaseIndex]]) % 26;

        keyUpperCaseIndex += 1;

        return this.alphabetIndexObject[encryptedCharIndex];
      })
      .join('');

      if (!this.direct) {
        result = result.split('').reverse().join('');
      }

      return result;
  }

  decrypt(encryptedMessage, key) {
    VigenereCipheringMachine.checkArgs(arguments);

    const messageUpperCase = encryptedMessage.toUpperCase();
    const paddedKey = VigenereCipheringMachine.getPaddedForLengthKey(key, messageUpperCase.length);
    const keyUpperCase = paddedKey.toUpperCase();

    let keyUpperCaseIndex = 0;

    let result = [...messageUpperCase]
      .map((char) => {
 
        if (!(char in this.alphabetCharObject)) {
          return char;
        }

        const encryptedCharIndex = Math.abs((this.alphabetCharObject[char] - this.alphabetCharObject[keyUpperCase[keyUpperCaseIndex]] + 26) % 26);

        keyUpperCaseIndex += 1;

        return this.alphabetIndexObject[encryptedCharIndex];
      })
      .join('');

      if (!this.direct) {
        result = result.split('').reverse().join('');
      }

      return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
