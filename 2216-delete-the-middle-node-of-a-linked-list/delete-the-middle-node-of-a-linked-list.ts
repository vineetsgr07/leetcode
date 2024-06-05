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
    if (!head || !head.next) return null; // If the list is empty or has only one node, return null

    let count = 0;
    let current = head;

    while (current) {
        current = current.next;
        count++;
    }

    let pivot = Math.floor(count / 2);

    current = head;

    for (let i = 0; i < pivot - 1; i++) {
        current = current.next;
    }

    current.next = current.next.next;

    return head;
}