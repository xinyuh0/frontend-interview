const findNumberOfPossibleUniqueStrings = (s: string) => {
  const dp: number[] = new Array(s.length).fill(0);

  dp[0] = 0;
  for (let i = 1; i < s.length; i++) {
    dp[i] = dp[i - 1];
    for (let j = 0; j < i; j++) {
      const subString = s.slice(j, i + 1);
      const reversedSubString = subString.split("").reverse().join("");

      // can speed up
      if (subString !== reversedSubString) {
        dp[i]++;
      }
    }
  }

  // add s itself
  return dp[s.length - 1] + 1;
};

findNumberOfPossibleUniqueStrings("abc");
