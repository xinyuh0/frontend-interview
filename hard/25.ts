class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (k === 1) return head;

    let prev: ListNode | null = null;
    let start: ListNode | null = head;
    let end: ListNode | null = head;
    let next: ListNode | null = null;

    let newHead: ListNode | null = null;
    while (true) {
        // n % k === 0
        // Finish reverse in last turn
        if (start === null) break;

        let needReverse = true;
        for (let i = 1; i < k; i++) {
            // @ts-ignore
            end = end.next;

            if (end === null) {
                needReverse = false;
                break;
            }
        }

        if (needReverse) {
            // Reverse from start to end
            // @ts-ignore
            next = end.next;
            if (k === 2) {
                // @ts-ignore
                end.next = start;
            } else {
                // @ts-ignore
                let p1 = start, p2 = start.next, p3 = start.next.next;
                for (let i = 1; i < k; i++) {
                    // @ts-ignore
                    p2.next = p1;
                    // @ts-ignore
                    p1 = p2;
                    p2 = p3;
                    // @ts-ignore
                    p3 = p3 === null ? null : p3.next;
                }
            }

            if (prev === null) {
                newHead = end;
            } else {
                prev.next = end;
            }
            prev = start;
            prev.next = null;

            // After reverse
            start = next;
            end = next;
        } else {
            // @ts-ignore
            prev.next = start;
            break;
        }
    }

    return newHead;
};