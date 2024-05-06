/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    let right = 0
    let left = 0
    let minimumSum = Infinity
    let windowSum = 0

    while (right < nums.length) {
        windowSum += nums[right]

        while (windowSum >= target) {
            minimumSum = Math.min(minimumSum, right - left + 1)
            windowSum -= nums[left]
            left++
        }

        right++
    }

    return minimumSum == Infinity ? 0 : minimumSum

};