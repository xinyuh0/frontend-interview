class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function sortList(head: ListNode | null): ListNode | null {
    let curr = head;

    if (head === null) { return null; }

    let tmp: ListNode[] = [];
    while (curr !== null) {
        tmp.push(curr);
        curr = curr.next;
    }

    tmp.sort((a, b) => a.val - b.val)

    for (let i = 0; i < tmp.length - 1; i++) {
        tmp[i].next = tmp[i + 1];
    }
    tmp[tmp.length - 1].next = null;

    // tmp.forEach(x => { console.log(x.val) })

    return tmp[0];
};