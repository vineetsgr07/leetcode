/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    
    return words.map((word,index)=>{ 
        return word.includes(x) ? index : false
    }).filter(word => word !== false)

};