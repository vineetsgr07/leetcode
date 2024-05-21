/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {

    let max = -Infinity

    const maxSum = (node) => {
        if (!node) return 0

        let left = maxSum(node.left)
        let right = maxSum(node.right)
        let allSum = left + right + node.val
        let leftSum = left + node.val
        let rightSum = right + node.val

        max = Math.max(max, leftSum, rightSum, node.val, allSum)

        return Math.max(leftSum, rightSum, node.val)
    }

    maxSum(root)

    return max
};