// DP
function minDistance(word1: string, word2: string): number {
    // Initialization
    let dp: any[] = [];
    for (let i = 0; i <= word1.length; i++) {
        let row: number[] = [];
        for (let j = 0; j <= word2.length; j++) {
            if (i === 0) {
                row.push(j);
            } else if (j === 0) {
                row.push(i);
            } else {
                row.push(-1);
            }
        }
        dp.push(row);
    }

    // Solve
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            // (i-1, j) (i, j-1) (i-1, j-1)
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1]);
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
            // console.log(word1.slice(0, i), word2.slice(0, j), dp[i][j]);
        }
    }

    return dp[word1.length][word2.length];
};

// minDistance("plasma", "altruism");