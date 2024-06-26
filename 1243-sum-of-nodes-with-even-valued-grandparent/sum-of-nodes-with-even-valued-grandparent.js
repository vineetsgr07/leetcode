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
var sumEvenGrandparent = function (root) {

    let res = 0

    const dfs = (root, p, gp) => {
        if (!root) return
        if (gp % 2 == 0) res += root.val

        dfs(root.left, root.val, p)
        dfs(root.right, root.val, p)
    }


    dfs(root, 1, 1)

    return res

};