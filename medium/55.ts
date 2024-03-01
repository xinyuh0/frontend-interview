function canJump_(nums: number[]): boolean {
    let dp: boolean[] = new Array(nums.length).fill(false);

    dp[0] = true;
    for (let i = 1; i < nums.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] && i - j <= nums[j]) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[nums.length - 1];
};


// Greedy
function canJump(nums: number[]): boolean {
    if (nums.length === 1) return true;

    let far = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (i <= far) {
            far = Math.max(far, i + nums[i]);
        } else {
            break;
        }
    }

    return far >= nums.length - 1;
}