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
 * @return {boolean}
 */
var isUnivalTree = function (root) {

    let value = root.val

    let dfs = (node) => {
        if (!node) return true

        if (node.val !== value) return false

        let leftReturn = true;
        let rightReturn = true;

        if (node.left) leftReturn = dfs(node.left)
        if (node.right) rightReturn = dfs(node.right)

        return leftReturn && rightReturn
    }

    return dfs(root)

};