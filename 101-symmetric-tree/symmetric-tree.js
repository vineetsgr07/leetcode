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
var isSymmetric = function (root) {

    if (!root) return true

    const isSymmetric = (tree1, tree2) => {
        if ((!tree1 && tree2) || (tree1 && !tree2) || (tree1 && tree2 && tree1.val !== tree2.val)) 
            return false

        if (tree1 && tree2)
            return isSymmetric(tree1.left, tree2.right) && isSymmetric(tree1.right, tree2.left)

        return true
    }

    return isSymmetric(root.left, root.right)

};