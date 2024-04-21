function minFlipsMonoIncr(s: string): number {
  // At each position of the string
  // There are some of 1s of the left side, and some of 0s of the right side

  let cntOfOnesFromLeft: number[] = new Array(s.length).fill(0);
  let cntOfZerosFromRight: number[] = new Array(s.length).fill(0);

  // Initialization
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      cntOfOnesFromLeft[i] = s[i] === "1" ? 1 : 0;
    } else {
      cntOfOnesFromLeft[i] = cntOfOnesFromLeft[i - 1] + (s[i] === "1" ? 1 : 0);
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (i === s.length - 1) {
      cntOfZerosFromRight[i] = s[i] === "0" ? 1 : 0;
    } else {
      cntOfZerosFromRight[i] =
        cntOfZerosFromRight[i + 1] + (s[i] === "0" ? 1 : 0);
    }
  }

  let flip = Number.MAX_SAFE_INTEGER;

  // Solve
  for (let i = 0; i < s.length; i++) {
    flip = Math.min(flip, cntOfOnesFromLeft[i] + cntOfZerosFromRight[i] - 1);
  }

  return flip;
}
