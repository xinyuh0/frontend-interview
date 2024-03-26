function minSubArrayLen(target: number, nums: number[]): number {
  // sum: sum of number in range [l, r)
  let l = 0;
  let r = 0;
  let sum = 0;
  let minlen = -1;

  while (l < nums.length) {
    // move r to right, until sum >= target
    while (sum < target && r < nums.length) {
      r++;
      sum += nums[r - 1];
    }

    if (sum < target) break;

    // move l to right
    while (sum >= target && l < r) {
      sum -= nums[l];
      l++;
    }

    minlen = minlen === -1 ? r - l + 1 : Math.min(minlen, r - l + 1);
  }

  return minlen === -1 ? 0 : minlen;
}

// minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
