/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {

    let store = ""
    for (let license of licensePlate) {
        let licenseLower = license.toLowerCase()
        let char = license.toLowerCase().charCodeAt()
        if (char >= 97 && char < 123) {
            store += licenseLower
        }
    }

    let sortWords = [...words].sort((a, b) => a.length - b.length);

    for (let word of sortWords) {
        let copyLicense = store

        for (let i = 0; i < word.length; i++) {
            copyLicense = copyLicense.replace(word[i], "")
            if (!copyLicense) return word
        }
    }

    throw new Error('don`t have completing word');

};