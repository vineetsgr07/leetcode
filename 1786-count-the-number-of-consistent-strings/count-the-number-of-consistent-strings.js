/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
    const consistent = (word) =>{
        for(let i of word){
            if(!allowed.includes(i)){
                return false
            }
        }
        return true
    }

    let store = []
    for(let word of words){
        if(consistent(word)){
            store.push(word)
        }
    }

    return store.length

};