function maxProfit_3(prices: number[]): number {
    // Solution 2: dynamic programming
    let dp: any = [];
    for (let i = 0; i < prices.length; i++) {
        dp.push([0, 0]);
    }
    dp[0][0] = -prices[0];

    // dp[i][0]: at the end of day i, hold a stock
    // dp[i][1]: at the end of day i, doesn't hold a stock 
    for (let i = 1; i < prices.length; i++) {
        // Still hold, or buy a stock today
        dp[i][0] = Math.max(dp[i - 1][1] - prices[i], dp[i - 1][0]);
        // Still not buy any, or sell a stock
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]);
    }

    return dp[prices.length - 1][1];
}