/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    
    let n = s.split(" ");

    for(let i=0; i<n.length; i++){
        if(i == k - 1) {
            return n.splice(0, i+ 1).join(" ")
        }
    }

    return s
};