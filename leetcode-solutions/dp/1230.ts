function probabilityOfHeads(prob: number[], target: number): number {
  const dp: number[][] = [];
  const N = prob.length;

  // initialization
  for (let i = 0; i < N; i++) {
    dp.push([]);
    for (let j = 0; j <= target; j++) {
      dp[i].push(0);
    }
  }

  dp[0][0] = 1 - prob[0];
  dp[0][1] = prob[0];
  // solve
  for (let i = 1; i < N; i++) {
    for (let j = 0; j <= Math.min(i + 1, target); j++) {
      // dp[i-1][j] * (1-prob) + dp[i-1][j-1] * prob
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] * (1 - prob[i]);
      } else {
        dp[i][j] = dp[i - 1][j] * (1 - prob[i]) + dp[i - 1][j - 1] * prob[i];
      }
    }
  }

  return dp[N - 1][target];
}
