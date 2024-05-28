/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    let store = new Map()

    for (let i = 0; i < nums.length; i++) {
        store.set(nums[i], (store.get(nums[i]) || 0) + 1)
    }

    let res = []

    for (let [key, val] of store) {
        res.push([key, val])
    }

    res.sort((a, b) => b[1] - a[1])

    return res.slice(0, k).map(a => a[0])


};