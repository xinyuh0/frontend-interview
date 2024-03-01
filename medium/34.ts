function searchRange(nums: number[], target: number): number[] {

    function search(l: number, r: number): number[] {
        if (l > r) return [-1, -1];

        if (l === r) {
            return nums[l] === target ? [l, r] : [-1, -1];
        }

        const mid = Math.floor((l + r) / 2);

        if (nums[mid] < target) {
            return search(mid + 1, r);
        }

        if (nums[mid] > target) {
            if (mid === l) {
                return [-1, -1];
            } else {
                return search(l, mid - 1);
            }
        }

        const leftRange = search(l, mid - 1);
        const rightRange = search(mid + 1, r);

        const start = leftRange[0] !== -1 ? leftRange[0] : mid;
        const end = rightRange[1] != -1 ? rightRange[1] : mid;

        return [start, end];
    }

    return search(0, nums.length - 1);
};