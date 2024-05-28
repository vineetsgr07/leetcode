/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    const getPalindrome = (index1, index2) => {

        while (index1 >= 0 && index2 < s.length && s[index1] === s[index2]) {
            index1--
            index2++
        }

        return s.slice(index1 + 1, index2)
    }

    let max_len = 0
    let max_word = ""

    for (let i = 0; i < s.length; i++) {
        let oddPalindrome = getPalindrome(i, i)
        let evenPalindrome = getPalindrome(i, i + 1)

        if (oddPalindrome.length > max_len) {
            max_len = oddPalindrome.length
            max_word = oddPalindrome
        }
        if (evenPalindrome.length > max_len) {
            max_len = evenPalindrome.length
            max_word = evenPalindrome
        }
    }

    return max_word

};