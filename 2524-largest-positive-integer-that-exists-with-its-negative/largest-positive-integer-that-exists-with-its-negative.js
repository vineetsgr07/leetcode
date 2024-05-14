/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {

    let sorted = nums.sort((a, b) => a - b)

    let first = 0
    let last = nums.length - 1

    while (first < last) {
        let firstAbs = Math.abs(nums[first])
        let lastAbs = Math.abs(nums[last])

        if (firstAbs == lastAbs && nums[first] !== nums[last]) {
            return firstAbs
        }
        
        firstAbs < lastAbs ?  last-- : first++
    }

    return -1

};