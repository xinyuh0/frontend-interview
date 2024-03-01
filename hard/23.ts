import { Heap } from "../ds/heap/heap";

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap = new Heap<ListNode>((a: ListNode, b: ListNode) => a.val - b.val);

    // Traversal the lists, initialize the heap
    for (let i = 0; i < lists.length; i++) {

        // Head
        let p = lists[i];
        while (p !== null) {
            const next = p.next;
            p.next = null;
            heap.insert(p);
            p = next;
        }
    }

    if (heap.isEmpty) return null;

    const head = heap.extractMin();
    let p = head;
    while (!heap.isEmpty) {
        const node = heap.extractMin();
        // @ts-ignore
        p.next = node;
        // @ts-ignore
        p = p.next;
    }

    return head;
}