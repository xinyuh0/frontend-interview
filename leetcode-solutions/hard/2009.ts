function minOperations(nums: number[]): number {
  const N = nums.length;

  nums = Array.from(new Set(nums));
  // All numbers are unique
  // max - min = nums.length - 1
  // -> i, i+1, ..., i+n-1
  nums.sort((a, b) => a - b);

  // Find the most number of elements that belong to the same continuous array
  let maxLen = 1;
  let l = 0,
    r = 0;
  const m: Map<number, boolean> = new Map<number, boolean>();

  while (l < nums.length) {
    while (nums[r] <= nums[l] + N - 1) {
      m.set(nums[r], true);
      r++;
    }

    maxLen = Math.max(maxLen, Array.from(m.keys()).length);

    const tmp = nums[l];
    l++;
    m.delete(tmp);
  }

  return N - maxLen;
}
