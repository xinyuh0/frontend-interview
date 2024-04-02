function maxA(n: number): number {
  // the key sequence either ends with 'A'
  // or Ctrl A, Ctrl C, Ctrl V, ..., Ctrl V
  const dp: number[] = new Array(n + 1).fill(1);
  dp[2] = 2;
  dp[3] = 3;

  // solve
  for (let i = 4; i <= n; i++) {
    // case 1: dp[i-1]+1
    dp[i] = dp[i - 1] + 1;
    // case 2
    for (let j = 1; j < i - 2; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
    }
  }

  return dp[n];
}
