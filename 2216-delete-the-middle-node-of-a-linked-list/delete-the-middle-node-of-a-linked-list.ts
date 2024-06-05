/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteMiddle(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0, head)
    let fast = dummy.next;
    let slow = dummy;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next
    }

    slow.next = slow.next.next

    return dummy.next;
}