function majorityElement(nums: number[]): number {
    let m: Map<number, number> = new Map();

    let res = -1;
    let n = -1;
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) {
            if (m.get(nums[i]) as number + 1 > n) {
                n = m.get(nums[i]) as number + 1;
                res = nums[i];
            }

            m.set(nums[i], m.get(nums[i]) as number + 1);
        } else {
            if (1 > n) {
                n = 1;
                res = nums[i];
            }

            m.set(nums[i], 1);
        }
    }

    return res;
};
