/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function(s, chars, vals) {
    
    let mapCharacters = new Map()

    for(let i=0; i<=vals.length; i++){
        mapCharacters.set(chars[i], vals[i])
    }

    
    let tempSum = 0 
    let sum = 0
    let characterCost
    for(let first=0; first < s.length; first++){
        
        if(mapCharacters.has(s[first])){
            characterCost = mapCharacters.get(s[first])
        }else{
            characterCost = s[first].charCodeAt() - 96;
        }

        tempSum += characterCost

        if(tempSum < 0)tempSum = 0

        if(tempSum > sum) sum = tempSum
        
    }


    return sum;
};