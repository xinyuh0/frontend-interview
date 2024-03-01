function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let hasDuplicate = false;

    // [start, end]
    let start = 0;
    let end = Math.min(nums.length - 1, k);

    let m: Map<number, number> = new Map<number, number>();

    for (let i = start; i <= end; i++) {
        let n = nums[i];

        if (m.has(n)) {
            // @ts-ignore
            m.set(n, m.get(n) + 1);
        } else {
            m.set(n, 1);
        }

        // @ts-ignore
        if (m.get(n) >= 2) {
            hasDuplicate = true;
        }
    }

    if (hasDuplicate) return true;

    start++;
    end++;
    while (end < nums.length && !hasDuplicate) {
        // remove start-1, add end
        let removed = nums[start - 1];
        let added = nums[end];

        // @ts-ignore
        m.set(removed, m.get(removed) - 1);

        if (m.has(added)) {
            // @ts-ignore
            m.set(added, m.get(added) + 1);
        } else {
            m.set(added, 1);
        }

        // @ts-ignore
        if (m.get(added) >= 2) {
            hasDuplicate = true;
        }

        start++;
        end++;
    }


    return hasDuplicate;
};


console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));