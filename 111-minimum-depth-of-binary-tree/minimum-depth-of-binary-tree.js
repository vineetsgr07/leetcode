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
var minDepth = function (root) {

    if (!root) return 0

    let min = Infinity

    const dfs = (node, height) => {
        if (!node) return

        if (node.left == null && node.right == null) {
            min = Math.min(min, height)
        }

        dfs(node.left, height + 1)
        dfs(node.right, height + 1)

        return
    }

    dfs(root, 1)

    return min
};