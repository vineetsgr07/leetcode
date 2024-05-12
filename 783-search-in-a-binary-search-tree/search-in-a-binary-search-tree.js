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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) return null
    
    if(root.val == val){
        return root
    }

    let leftNode = searchBST(root.left, val)
    let rightNode = searchBST(root.right, val)

    if(leftNode !== null){ return leftNode}
    if(rightNode !== null){ return rightNode}
    
    return null
};