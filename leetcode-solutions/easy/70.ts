function climbStairs(n: number): number {
    // Initialization
    let dp: number[] = new Array(n + 1).fill(0);
    dp[0] = 1, dp[1] = 1;

    // dp
    for (let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};