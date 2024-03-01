// Solution 1, O(n)
function search(nums: number[], target: number): boolean {
    const len = nums.length;

    if (target === nums[0] || target === nums[len - 1]) {
        return true;
    } else if (target > nums[len - 1] && target < nums[0]) {
        return false;
    } else if (target > nums[0]) {
        for (let i = 1; i < len; i++) {
            if (nums[i] === target) { return true; }

            if (nums[i] < nums[i - 1]) { break; }
        }

        return false;
    } else {
        for (let i = len - 2; i >= 0; i--) {
            if (nums[i] === target) { return true; }

            if (nums[i] > nums[i + 1]) { break; }
        }

        return false;
    }
};