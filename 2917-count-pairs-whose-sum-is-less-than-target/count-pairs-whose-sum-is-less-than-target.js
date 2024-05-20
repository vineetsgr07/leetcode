/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    nums.sort((a, b) => a - b)

    let first = 0
    let last = nums.length - 1
    let count = 0
    while (first < last) {
        if (nums[first] + nums[last] < target) {
            count += last-first
            first++
        } else {
            last--
        }
    }
    return count

};