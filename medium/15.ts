// Double pointer
function threeSum(nums: number[]): number[][] {
    if (nums.length < 3) return [];

    // Sort
    nums.sort((a, b) => a - b);

    // console.log(nums);

    let res: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;

        if (i >= 1 && nums[i] === nums[i - 1]) continue;

        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            console.log(nums[i], nums[l], nums[r]);
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                const lastL = nums[l], lastR = nums[r];
                while (nums[l] === lastL) l++;
                while (nums[r] === lastR) r--;
            } else if (sum > 0) {
                r--;
            } else {
                l++;
            }
        }
    }

    return res;
};

// threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);