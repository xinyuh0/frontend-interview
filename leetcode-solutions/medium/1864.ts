function minSwaps(s: string): number {
  let cntOfZeros = s.split("").filter((l) => l === "0").length;
  let cntOfOnes = s.length - cntOfZeros;

  if (Math.abs(cntOfZeros - cntOfOnes) > 1) {
    return -1;
  }

  // Solve
  // 1. contruct the alternating string using letters we have
  let alternatingStrs: string[] = [];

  if (cntOfZeros > cntOfOnes) {
    // 0101010
    let str = "01".repeat(cntOfOnes) + "0";
    alternatingStrs.push(str);
  } else if (cntOfOnes > cntOfZeros) {
    // 1010101
    let str = "10".repeat(cntOfZeros) + "1";
    alternatingStrs.push(str);
  } else {
    // 01010101 or 10101010
    let str1 = "01".repeat(cntOfOnes);
    let str2 = "10".repeat(cntOfOnes);
    alternatingStrs.push(str1);
    alternatingStrs.push(str2);
  }

  let ans = Number.MAX_SAFE_INTEGER;
  // 2. compare each letter with the constructed string
  for (let alternatingStr of alternatingStrs) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== alternatingStr[i]) {
        cnt++;
      }
    }
    ans = Math.min(ans, cnt / 2);
  }

  return ans;
}
