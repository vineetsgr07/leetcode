/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {

    let map = new Map()

    let count = 0

    for (let item of nums) {
        if (map.has(item)) {
            count += map.get(item)
            map.set(item, map.get(item) + 1)
        } else {
            map.set(item, 1)
        }
    }
    return count
};