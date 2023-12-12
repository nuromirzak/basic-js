const {NotImplementedError} = require('../extensions/index.js');

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
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(str, key) {
        if (str === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        const upperStr = str.toUpperCase(), upperKey = key.toUpperCase(),
            extendedKey = this.extendKey(upperStr, upperKey);
        let encryptedStr = '';
        for (let i = 0; i < upperStr.length; i++) {
            if (65 <= upperStr.charCodeAt(i) && upperStr.charCodeAt(i) <= 90) {
                encryptedStr += String.fromCharCode((upperStr.charCodeAt(i) + extendedKey.charCodeAt(i)) % 26 + 65);
            } else {
                encryptedStr += upperStr[i];
            }
        }
        return this.direct ? encryptedStr : encryptedStr.split('').reverse().join('');
    }

    decrypt(str, key) {
        if (str === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        const upperStr = str.toUpperCase(), upperKey = key.toUpperCase(),
            extendedKey = this.extendKey(upperStr, upperKey);
        let decryptedStr = '';
        for (let i = 0; i < upperStr.length; i++) {
            if (65 <= upperStr.charCodeAt(i) && upperStr.charCodeAt(i) <= 90) {
                decryptedStr += String.fromCharCode((upperStr.charCodeAt(i) + 26 - extendedKey.charCodeAt(i)) % 26 + 65);
            } else {
                decryptedStr += upperStr[i];
            }
        }
        return this.direct ? decryptedStr : decryptedStr.split('').reverse().join('');
    }

    extendKey(str, key) {
        let extendedKey = '';

        for (let i = 0, j = 0; i < str.length; i++) {
            if (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) {
                extendedKey += key[j % key.length].toUpperCase();
                j++;
            } else {
                extendedKey += str[i];
            }
        }

        return extendedKey;
    }
}

module.exports = {
    VigenereCipheringMachine
};
