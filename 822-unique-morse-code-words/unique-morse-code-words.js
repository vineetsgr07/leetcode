/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let letterMapping = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

    let store = new Set()

    for (let word of words) {
        let result = ""
        for (let w of word) {
            let code = w.charCodeAt()
            result += letterMapping[code - 97]
        }
        store.add(result)
    }

    return [...store].length
};