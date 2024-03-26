function subsetsWithDup(nums: number[]): number[][] {
  // Initialization, compute the frequencies of each number
  nums.sort((a, b) => a - b);
  const m: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (m.has(num)) {
      m.set(num, (m.get(num) as number) + 1);
    } else {
      m.set(num, 1);
    }
  }

  // Solve
  const sequence: number[] = [];
  const ans: number[][] = [];

  const dfs = (idx: number) => {
    // Reach the end, add sequence to the ans
    if (idx === nums.length) {
      ans.push([...sequence]);
      return;
    }

    const num = nums[idx];
    const freq = m.get(num) as number;

    // `num` can appear in the sequence for 0 ~ freq times
    for (let i = 0; i <= freq; i++) {
      // push num to sequence
      for (let k = 1; k <= i; k++) {
        sequence.push(num);
      }

      dfs(idx + freq);

      for (let k = 1; k <= i; k++) {
        sequence.pop();
      }
    }
  };

  dfs(0);

  return ans;
}
