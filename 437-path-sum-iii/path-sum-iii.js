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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {

    let output = 0
    let map = {}

    const trav = (node, pathSum) => {
        if (!node) return null

        pathSum += node.val

        if (pathSum === targetSum) output++;

        if (map[pathSum - targetSum]) {
            output += map[pathSum - targetSum]
        }

        if (map[pathSum]) {
            map[pathSum]++
        } else {
            map[pathSum] = 1
        }

        if (node.left) trav(node.left, pathSum)
        if (node.right) trav(node.right, pathSum)

        map[pathSum]--
    }

    trav(root, 0)


    return output

};