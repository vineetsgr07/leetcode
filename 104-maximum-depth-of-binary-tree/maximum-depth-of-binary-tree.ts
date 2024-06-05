/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0

    let store = [root]
    let depth = 0

    while (store.length != 0) {
        depth++
        let localStore = []

        for (let i = 0; i < store.length; i++) {
            let node = store[i]
            if (node?.left) localStore.push(node.left)
            if (node?.right) localStore.push(node.right)
        }
        store = localStore
    }

    return depth
};