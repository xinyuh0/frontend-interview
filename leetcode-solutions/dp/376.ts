function wiggleMaxLength(nums: number[]): number {
  const N = nums.length;

  let up = 1;
  let down = 1;

  for (let i = 1; i < N; i++) {
    if (nums[i] > nums[i - 1]) {
      up = Math.max(down + 1, up);
    } else if (nums[i] < nums[i - 1]) {
      down = Math.max(up + 1, down);
    }
  }

  return Math.max(up, down);
}

wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]);
