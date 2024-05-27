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
 * @return {number[][]}
 */
var levelOrder = function (root) {

    let res = []
    let queue = [root]
    let ans = []

    while (queue.length) {
        res = []
        let local = []
        for (let i = 0; i < queue.length; i++) {
            queue[i]?.left && res.push(queue[i].left)
            queue[i]?.right && res.push(queue[i].right)
            queue[i]?.val !== undefined && local.push(queue[i]?.val)
        }
        local.length && ans.push(local)
        queue = res
    }

    return ans

};