/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let hash = new Map()
    let array = ""
    let maxOccurance = 0;
    let element = ""

    for (let para of paragraph) {
        let char = para.toLowerCase().charCodeAt()
        array += (char >= 97 && char <= 122) ? para.toLowerCase() : " "
    }

    for (let item of array.split(" ")) {
        if (!banned.includes(item) && item) {
            let currentCout = (hash.get(item) || 0) + 1
            hash.set(item, currentCout)
            if (currentCout > maxOccurance) {
                maxOccurance = currentCout
                element = item
            }
        }
    }

    return element
};