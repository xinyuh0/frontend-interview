
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }


function hasCycle(head: ListNode | null): boolean {
    if (head === null) return false;

    // Slow-fast pointer
    let slow: ListNode | null = head;
    let fast: ListNode | null = head.next;
    while (slow !== null && fast !== null) {
        if (slow == fast) return true;

        slow = slow.next;

        if (fast.next === null) break;

        fast = fast.next.next;
    }

    return false;
};