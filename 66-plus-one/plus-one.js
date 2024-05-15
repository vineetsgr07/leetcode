/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let lastDigit = digits.join("")
    let result = BigInt(lastDigit) + BigInt(1)

    return result.toString().split("")

};