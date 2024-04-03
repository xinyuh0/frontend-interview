function minInsertions(s: string): number {
  const N = s.length;

  const dp: number[][] = [];

  // the length of the longest palindrome
  for (let i = 0; i < N; i++) {
    dp.push([]);
    for (let j = 0; j < N; j++) {
      dp[i].push(1);
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    for (let j = i + 1; j < N; j++) {
      if (s[i] === s[j]) {
        if (j - i === 1) {
          dp[i][j] = 2;
        } else {
          dp[i][j] = dp[i + 1][j - 1] + 2;
        }
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return N - dp[0][N - 1];
}
