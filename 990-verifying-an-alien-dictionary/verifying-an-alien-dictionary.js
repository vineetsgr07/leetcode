/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {

    let lexiographicMap = new Map()
    for(let i=0; i<order.length; i++){
        lexiographicMap.set(order[i], i)
    }

    const compare = (word1, word2) => {

        let first = 0
        let second = 0
        
        while(first < word1.length || second < word2){
            if(word1[first] !== word2[second]){
                indexOfWord1Character = lexiographicMap.get(word1[first])
                indexOfWord2Character = lexiographicMap.get(word2[second])
                
                console.log("here", word1[first], word2[second])
                if(indexOfWord1Character > indexOfWord2Character){
                    return false
                }else{
                    if(word1.length > word2.length){
                        if(word2[second] == undefined || word2[first] == undefined){
                            return false
                        }
                    }
                    return true
                }
            }  
            first++
            second++ 
        }


        return true
    }
    
    for(let i=0; i<words.length; i++){
        for(let j=i+1; j<words.length; j++){
            if(!compare(words[i], words[j])){
                return false
            }
        }
    }

    return true

};