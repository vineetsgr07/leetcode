/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root

    let q = [root]

    while (q.length) {
        let qlen = q.length
        let pushed = []

        for (let i = 0; i < qlen; i++) {
            let item = q.shift()

            if (i < qlen - 1) {
                item.next = q[0];
            }

            if (item.left) pushed.push(item.left);
            if (item.right) pushed.push(item.right);
        }
        q = pushed;
    }

    return root
};