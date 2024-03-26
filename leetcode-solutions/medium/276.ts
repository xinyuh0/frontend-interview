function numWays(n: number, k: number): number {
  let dp: number[] = new Array<number>(n + 1).fill(0);

  dp[1] = k;
  dp[2] = k * k;

  for (let i = 3; i < n + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) * (k - 1);
  }

  return dp[n];
}
