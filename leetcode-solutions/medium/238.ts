function productExceptSelf(nums: number[]): number[] {
  const l: number[] = new Array(nums.length).fill(1);
  const r: number[] = new Array(nums.length).fill(1);
  const ans: number[] = new Array(nums.length).fill(1);

  l[0] = nums[0];
  r[nums.length - 1] = nums[nums.length - 1];
  // Initialization
  for (let i = 1; i < nums.length; i++) {
    l[i] = nums[i] * l[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    r[i] = nums[i] * r[i + 1];
  }

  // Solve
  for (let i = 0; i < nums.length; i++) {
    if (i - 1 >= 0) {
      ans[i] *= l[i - 1];
    }

    if (i + 1 < nums.length) {
      ans[i] *= r[i + 1];
    }
  }

  return ans;
}
