function rob(nums: number[]): number {
    // dp[i][0]: maximum amount if house i is not robbed.
    // dp[i][1]: maximum amount if house i is robbed.
    let dp: number[][] = [];

    // Initialization
    for (let i = 0; i < nums.length; i++) {
        dp.push([0, 0]);
    }
    dp[0][1] = nums[0];

    // DP process
    for (let i = 1; i < nums.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
        dp[i][1] = dp[i - 1][0] + nums[i];
    }

    return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
};

// console.log(rob([1, 2, 3, 1]));