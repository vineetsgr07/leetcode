/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    const isPalindrome = (word) =>{
        let left = 0
        let right = word.length - 1

        while(left <= right){
            if(word[left] == word[right]){
                left++
                right--
            }else{
                return false
            }
        }
        return true
    }

    for(let word of words){
        if(isPalindrome(word)){
            return word
        }
    }

    return ""

};