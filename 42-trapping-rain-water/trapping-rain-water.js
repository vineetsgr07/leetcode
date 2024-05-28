/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length == 0) return 0

    let n = height.length
    let leftMax = new Array(n).fill(0)
    let rightMax = new Array(n).fill(0)
    let trappedWater = 0

    leftMax[0] = height[0]
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1])
    }

    rightMax[n - 1] = height[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1])
    }

    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return trappedWater
};