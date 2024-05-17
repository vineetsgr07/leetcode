/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let hash = new Map()
    let array = ""
    
    for (let i = 0; i < paragraph.length; i++) {
        let char = paragraph[i].toLowerCase().charCodeAt()
        if (char >= 97 && char <= 122) {
            array += paragraph[i].toLowerCase()
        } else {
            if(paragraph[i] == " "){
                array += paragraph[i]
            }else{
                array += " "
            }
        }
    }

    let convertToArray = array.split(" ").filter(x => x)
    let maxOccurance = 0;
    let foundAtIndex = -1

    for (let item of convertToArray) {
        if (!banned.includes(item)) {
            let currentCout = (hash.get(item) || 0) + 1
            hash.set(item, currentCout)
            if (currentCout > maxOccurance) {
                maxOccurance = currentCout
                foundAtIndex = item
            }
        }
    }

    return foundAtIndex
};