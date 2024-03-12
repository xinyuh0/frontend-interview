class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let pos = 1;

    let prev: ListNode | null = null;
    let node: ListNode | null = head;
    let _tail: ListNode | null = node;
    // @ts-ignore
    let next: ListNode | null = head.next;

    let leftNode: ListNode | null = null;
    let rightNode: ListNode | null = null;

    while (true) {
        if (pos === left) {
            leftNode = prev;
            _tail = node;
        }

        if (pos === right) {
            // @ts-ignore
            rightNode = node.next;
        }

        if (pos > left && pos <= right) {
            // @ts-ignore
            node.next = prev;
        }

        if (pos === right) {
            break;
        }

        pos++;
        prev = node;
        // @ts-ignore
        node = next;
        // @ts-ignore
        next = node.next;
    }

    let newHead: ListNode | null = null;

    if (leftNode !== null) {
        newHead = head;
        leftNode.next = node;
    } else {
        newHead = node;
    }

    // @ts-ignore
    _tail.next = rightNode;

    return newHead;
};