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
var distributeCoins = function (root) {

    let max = 0

    const dfs = (node) => {
        if (!node) return 0

        let leftAccess = dfs(node.left)
        let rightAccess = dfs(node.right)

        max += Math.abs(leftAccess) + Math.abs(rightAccess)
        return node.val + leftAccess + rightAccess - 1
    }

    dfs(root)

    return max
};