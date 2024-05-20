/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {

    let chars = s.split('');

    let first = 0
    let second = chars.length - 1

    while (first <= second) {
        if (chars[first] !== chars[second]) {
            let firstCharCode = chars[first].charCodeAt()
            let secondCharCode = chars[second].charCodeAt()

            if (firstCharCode <= secondCharCode) {
                chars[second] = chars[first]
            } else {
                chars[first] = chars[second]
            }
        }

        first++
        second--
    }

    return chars.join("")

};