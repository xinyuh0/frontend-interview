function isMatch(s: string, p: string): boolean {
  const M = s.length;
  const N = p.length;

  // dynamic programming
  // whether s[0, ..., i] matches with p[0, ..., j]
  const dp: boolean[][] = [];

  // initialization
  for (let i = 0; i < M + 1; i++) {
    dp.push([]);
    for (let j = 0; j < N + 1; j++) {
      dp[i].push(false);
    }
  }

  //   console.log(dp);

  // solve
  for (let i = 0; i < M + 1; i++) {
    for (let j = 0; j < N + 1; j++) {
      // '' matches with ''
      if (i === 0 && j === 0) {
        dp[i][j] = true;
        continue;
      }

      // empty pattern
      if (j === 0) {
        continue;
      }

      const pChar = p[j - 1];

      // empty string
      if (i === 0) {
        dp[i][j] = dp[i][j - 1] && pChar === "*";
        continue;
      }

      const sChar = s[i - 1];
      if (pChar === "*") {
        for (let k = 0; k <= i; k++) {
          if (dp[k][j - 1]) {
            dp[i][j] = true;
            break;
          }
        }
      } else if (pChar === "?") {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j - 1] && pChar === sChar;
      }
    }
  }

  return dp[M][N];
}

isMatch("aa", "a");
