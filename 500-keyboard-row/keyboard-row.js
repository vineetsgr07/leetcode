/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let first = "qwertyuiop"
    let second = "asdfghjkl"
    let third = "zxcvbnm"

    const getRow = (character) => {
        if(first.includes(character)) return first
        if(second.includes(character)) return second
        if(third.includes(character)) return third
    }

    let store = []
    for(let word of words){

        let i=0
        let row = getRow(word[0].toLowerCase())
        let count = 0 
        while(i <= word.length){
            if(row.includes(word[i]?.toLowerCase())){
                count++
            }
            i++
        }

        if(count==word.length){
            store.push(word)
        }
    }

    return store
};