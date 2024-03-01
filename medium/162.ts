// Binary Search
function findPeakElement(nums: number[]): number {
    if (nums.length === 1) return 0;

    // Judge whether an element is a peak
    function isPeak(i: number): boolean {
        if (i === 0) return nums[i] > nums[i + 1];

        if (i === nums.length - 1) return nums[i] > nums[i - 1];

        return nums[i] > nums[i + 1] && nums[i] > nums[i - 1];
    }

    function find(l: number, r: number): number {
        if (l === r) {
            return l;
        }

        const mid = Math.floor((l + r) / 2);

        if (isPeak(mid)) return mid;

        // Increase at the right of mid
        // We can safely drop the left part. because there must exist a peak at the right
        if (nums[mid] < nums[mid + 1]) {
            return find(mid + 1, r);
        }

        if (mid === l) {
            return l;
        } else {
            return find(l, mid - 1);
        }
    }

    return find(0, nums.length - 1);
};