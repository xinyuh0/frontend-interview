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

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
    let p1: ListNode | null = l1;
    let p2: ListNode | null = l2;


    let res = new ListNode((p1.val + p2.val) % 10, null);
    let carry = Math.floor((p1.val + p2.val) / 10);

    p1 = p1.next;
    p2 = p2.next;

    let p3 = res;

    while (p1 !== null || p2 !== null) {
        let newNode = new ListNode();

        if (p1 === null && p2 !== null) {
            newNode.val = (p2.val + carry) % 10;
            carry = Math.floor((p2.val + carry) / 10);
        } else if (p2 === null && p1 !== null) {
            newNode.val = (p1.val + carry) % 10;
            carry = Math.floor((p1.val + carry) / 10);
        } else {
            // @ts-ignore
            newNode.val = (p1.val + p2.val + carry) % 10;
            // @ts-ignore
            carry = Math.floor((p1.val + p2.val + carry) / 10);
        }

        if (p1 !== null) {
            p1 = p1.next;
        }

        if (p2 !== null) {
            p2 = p2.next;
        }

        p3.next = newNode;
        p3 = newNode;
    }

    if (carry > 0) {
        p3.next = new ListNode(carry);
    }

    return res;
};