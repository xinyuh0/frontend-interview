function coinChange(coins: number[], amount: number): number {
  coins.sort((a, b) => a - b);

  // dp[i]: minimum number of coins that adds up to i
  const dp = new Array(amount + 1).fill(-1);
  dp[0] = 0;

  // for coin in coins
  // j = i - coin
  // dp[i] = min(dp[j] + 1)
  for (let i = 1; i <= amount; i++) {
    let res = Number.MAX_SAFE_INTEGER;
    for (const coin of coins) {
      const j = i - coin;

      // out of range
      if (j < 0) break;

      // no solution for j
      if (dp[j] === -1) continue;

      res = Math.min(res, dp[j] + 1);
    }
    if (res !== Number.MAX_SAFE_INTEGER) dp[i] = res;
  }

  return dp[amount];
}
