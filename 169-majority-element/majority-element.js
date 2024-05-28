/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let size = nums.length / 2
    let store = new Map()
    let count = 0
    let max = 0

    for (let i = 0; i < nums.length; i++) {
        store.set(nums[i], (store.get(nums[i]) || 0) + 1)

        if (store.get(nums[i]) > size) {
            return nums[i]
        }
    }

};

// 7/2 = 3.5