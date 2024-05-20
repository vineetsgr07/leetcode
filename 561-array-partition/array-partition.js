/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort((a, b) => b - a)

    let sum = 0
    for (let i = 0; i < nums.length; i = i + 2) {
        let min = Math.min(nums[i], nums[i + 1])
        sum += min
    }
    return sum
};