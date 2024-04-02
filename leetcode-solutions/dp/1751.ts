function maxValue(events: number[][], k: number): number {
  const N = events.length;
  events.sort((a, b) => a[1] - b[1]);

  // initialization
  const dp: number[][] = [];
  for (let i = 0; i < N; i++) {
    dp.push([]);
    for (let j = 0; j <= k; j++) {
      dp[i].push(0);
    }
  }

  // solve
  for (let i = 0; i < N; i++) {
    for (let j = 1; j <= k; j++) {
      const s = events[i][0];
      const val = events[i][2];

      if (i === 0) {
        dp[i][j] = val;
        continue;
      }

      // skip event i
      let tmp = dp[i - 1][j];

      // choose event i
      tmp = Math.max(tmp, val);

      if (j > 1) {
        for (let last = i - 1; last >= 0; last--) {
          const lastEnd = events[last][1];
          if (s > lastEnd) {
            tmp = Math.max(tmp, dp[last][j - 1] + val);
            break;
          }
        }
      }

      dp[i][j] = tmp;
    }
  }

  return dp[N - 1][k];
}

console.log(
  maxValue(
    [
      [21, 77, 43],
      [2, 74, 47],
      [6, 59, 22],
      [47, 47, 38],
      [13, 74, 57],
      [27, 55, 27],
      [8, 15, 8],
    ],
    2
  )
);
