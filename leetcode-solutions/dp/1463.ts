function cherryPickup(grid: number[][]): number {
  const M = grid.length;
  const N = grid[0].length;
  const dp: Array<number[][]> = [];

  // initialization
  for (let i = 0; i < M; i++) {
    dp.push([]);
    for (let j = 0; j < N; j++) {
      dp[i].push([]);
      for (let k = 0; k < N; k++) {
        dp[i][j].push(-1);
      }
    }
  }

  // solve
  let ans = 0;
  // 1st row
  dp[0][0][N - 1] = grid[0][0] + grid[0][N - 1];
  for (let i = 1; i < M; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        const val = j !== k ? grid[i][j] + grid[i][k] : grid[i][j];
        console.log(i, j, k, val);
        // dp
        for (let j_ = j - 1; j_ <= j + 1; j_++) {
          if (j_ < 0 || j_ >= N) continue;
          for (let k_ = k - 1; k_ <= k + 1; k_++) {
            if (k_ < 0 || k_ >= N) continue;
            // could not be reached
            if (dp[i - 1][j_][k_] === -1) continue;
            dp[i][j][k] = Math.max(dp[i - 1][j_][k_] + val, dp[i][j][k]);
          }
        }

        ans = Math.max(ans, dp[i][j][k]);
      }
    }
  }

  return ans;
}

cherryPickup([
  [3, 1, 1],
  [2, 5, 1],
  [1, 5, 5],
  [2, 1, 1],
]);
