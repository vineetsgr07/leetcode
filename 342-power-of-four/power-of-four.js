/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    
    while(n>1){
        if(n%4 == 0){
            n /= 4
        }else{
            break
        }

    }

    return n === 1

};