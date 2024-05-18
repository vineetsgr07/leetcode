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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    if (!root) return false

    let store = new Set()

    const traverse = (node) => {
        if (!node) return false

        if (store.has(node.val)) {
            return true
        } else {
            store.add(k - node.val)
        }

        let leftAccess = traverse(node.left)
        let rightAccess = traverse(node.right)

        return leftAccess || rightAccess
    }

    return traverse(root)
};