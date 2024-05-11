/**
 * @param {string[]} words
 * @return {number}
 */


var maxPalindromesAfterOperations = function(words) {
    let string = words.join("")
    let map = new Map()
    let pair = 0
    let ans = 0

    for(let i=0; i< string.length; i++){
        map.set(string[i], (map.get(string[i]) || 0 ) + 1)
        if(map.get(string[i]) %2 == 0){
            pair++
        }
    }

    words = words.sort((a,b) =>  a.length - b.length)

    for(let j=0; j<words.length; j++){
        let wordLength = Math.floor(words[j].length/2)
        pair -= wordLength
        ans += pair >= 0 ? 1: 0
    }

    return ans
};
