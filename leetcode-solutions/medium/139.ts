function wordBreak(s: string, wordDict: string[]): boolean {
  // Initialization
  const m: Map<string, boolean> = new Map<string, boolean>();
  for (const word of wordDict) {
    m.set(word, true);
  }

  // Solve
  const dp: boolean[] = new Array<boolean>(s.length).fill(false);
  dp[0] = m.has(s[0]) ? true : false;
  for (let i = 1; i < s.length; i++) {
    let flag = false;
    // Check if s[0...i] itself is in the wordDict
    if (m.has(s.substring(0, i + 1))) {
      flag = true;
    }

    for (let j = 1; j <= i; j++) {
      if (flag) break;

      if (dp[j - 1] && m.has(s.substring(j, i + 1))) {
        flag = true;
      }
    }
    dp[i] = flag;
  }

  return dp[s.length - 1];
}

console.log(wordBreak("leetcode", ["leet", "code"]));
