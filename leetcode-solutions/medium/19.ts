// 2024.1.13 #5
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) return head;

    let tmp: ListNode[] = []
    let ptr: ListNode | null = head;

    // ptr !== undefined || ptr !== null
    while (ptr) {
        tmp.push(ptr);
        ptr = ptr.next;
    }

    const idx = tmp.length - n;

    if (idx === 0) {
        tmp.shift();
    } else {
        tmp[idx - 1].next = tmp[idx].next;
    }

    return tmp.length > 0 ? tmp[0] : null;
};