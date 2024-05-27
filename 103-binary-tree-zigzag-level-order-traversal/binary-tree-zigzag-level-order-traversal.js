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
var zigzagLevelOrder = function (root) {
    if (!root) return []

    let ans = []
    let queue = [root]
    let mod = 0

    while (queue.length) {
        let localQueue = []
        let localAnswer = []
        mod += 1
        for (let i = 0; i < queue.length; i++) {
            queue[i]?.left && localQueue.push(queue[i].left)
            queue[i]?.right && localQueue.push(queue[i].right)
            queue[i]?.val !== undefined && localAnswer.push(queue[i].val)
        }
        if (mod % 2 == 0) {
            ans.push(localAnswer.reverse())
        } else {
            ans.push(localAnswer)
        }
        queue = localQueue
    }

    return ans

}
