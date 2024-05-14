/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let reverseString = ""
    indexOfCharacter = word.indexOf(ch)

    if (indexOfCharacter == -1) return word

    for (let i = indexOfCharacter; i >= 0; i--) reverseString += word[i]

    return reverseString + word.slice(indexOfCharacter + 1, word.length)

};