/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    
    let count = 0;
    for(let item of items){
        let type = item[0]
        let color = item[1]
        let name = item[2]

        if(ruleKey == "type"){
            if(ruleValue == type){
                count+=1
            }
        }

        if(ruleKey == "color"){
            if(ruleValue == color){
                count+=1
            }
        }

        if(ruleKey == "name"){
            if(ruleValue == name){
                count+=1
            }
        }
    }

    return count
};