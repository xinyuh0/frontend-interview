function countHousePlacements(n: number): number {
  const MOD = BigInt(1e9 + 7);
  // 1. compute the number of possible arrangements for one side (k)
  // 2. ans = k * k
  const dp = new Array(n + 1).fill(0n);
  dp[0] = 1n;
  dp[1] = 2n;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return Number(BigInt(dp[n] * dp[n]) % MOD);
}

console.log(countHousePlacements(1));
