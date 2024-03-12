function combine(n: number, k: number): number[][] {
    function dfs(nums: number[], curr: number) {
        if (nums.length === k - 1) {
            res.push([...nums, curr]);
            return;
        }

        const numOfRemain = n - curr;

        if (numOfRemain + nums.length + 1 < k) return;

        for (let i = curr + 1; i <= n; i++) {
            dfs([...nums, curr], i);
        }
    }

    let res: number[][] = [];
    for (let i = 1; i <= n; i++) {
        dfs([], i);
    }

    return res;
};

// console.log(combine(4, 2));