/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    
    let count = 0;
    for(let operation of operations){
        if(operation == "X++" || operation == "++X") count+=1
        if(operation == "X--" || operation == "--X") count-=1
    }
    return count
};