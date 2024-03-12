function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) return [];

    let res: string[] = [];

    let start = nums[0];
    let end = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let n = nums[i];

        if (n === end + 1) {
            end = n;
        } else {
            // n > end + 1
            if (start === end) {
                res.push(start.toString());
            } else {
                // end > start
                res.push(`${start}->${end}`);
            }
            start = n;
            end = n;
        }
    }

    // last element
    if (start === end) {
        res.push(start.toString());
    } else {
        // end > start
        res.push(`${start}->${end}`);
    }

    return res;
};

// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));