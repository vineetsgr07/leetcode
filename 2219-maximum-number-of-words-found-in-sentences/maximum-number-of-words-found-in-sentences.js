/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
    let max = 0;

    for(let sentence of sentences){
        max = Math.max(max, sentence.split(" ").length)
    }

    return max

};