/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let hash1 = new Map()
    let hash2 = new Map()

    for (let i = 0; i < nums1.length; i++) {
        hash1.set(nums1[i], (hash1.get(nums1[i]) || true))
    }

    for (let j = 0; j < nums2.length; j++) {
        hash2.set(nums2[j], (hash2.get(nums2[j]) || true))
    }

    let store1 = []
    for (let i = 0; i < nums1.length; i++) {
        if (hash2.get(nums1[i]) == undefined) {
            if (store1.indexOf(nums1[i]) == -1) {
                store1.push(nums1[i])
            }
        }
    }

    let store2 = []

    for (let i = 0; i < nums2.length; i++) {
        if (hash1.get(nums2[i]) == undefined) {
            if (store2.indexOf(nums2[i]) == -1) {
                store2.push(nums2[i])
            }
        }
    }

    return [store1, store2]
};