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
var sumOfLeftLeaves = function (root) {
    if (!root) return 0
    let sum = 0

    const dfsLeft = (node, isLeft) => {
        if (!node) return

   if (isLeft && !node.left && !node.right) {
            sum += node.val;
        }

        let leftAccess = dfsLeft(node.left, true)
        let rightAccess = dfsLeft(node.right, false)
    }

    dfsLeft(root, false)

    return sum

};