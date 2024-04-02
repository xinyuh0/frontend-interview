function longestStrChain(words: string[]): number {
  words.sort((a, b) => a.length - b.length);

  const isPredecessor = (a: string, b: string): boolean => {
    // judge if we can get b by insert one letter into a
    for (let i = 0; i < b.length; i++) {
      if (b.slice(0, i) + b.slice(i + 1) === a) {
        return true;
      }
    }

    return false;
  };

  const dp: number[] = new Array(words.length).fill(1);

  let maxLen = 1;
  // solve
  for (let i = 1; i < words.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (words[j].length < words[i].length - 1) {
        break;
      }

      if (isPredecessor(words[j], words[i])) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
}

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
