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

function middleNode(head: ListNode | null): ListNode | null {
    let middleNode: ListNode = head;
    let nextNode: ListNode = head;

    while (nextNode != null && nextNode.next != null) {
        middleNode = middleNode.next;
        nextNode = nextNode.next.next;
    }

    return middleNode;
};