function combinationSum3(k: number, n: number): number[][] {
  const ans: number[][] = [];
  const sequence: number[] = [];

  // i is from 1 to 9
  const backtrack = (i: number, target: number) => {
    if (target < 0 || sequence.length > k) return;

    if (sequence.length === k) {
      if (target === 0) {
        ans.push([...sequence]);
      }
      return;
    }

    if (i > 9) return;

    // use i
    sequence.push(i);
    backtrack(i + 1, target - i);
    sequence.pop();

    // do not use i
    backtrack(i + 1, target);
  };

  backtrack(1, n);
  return ans;
}

combinationSum3(9, 45);
