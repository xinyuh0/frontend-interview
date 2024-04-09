function minOperationsToMakeMedianK(nums: number[], k: number): number {
  const N = nums.length;

  // Make sure there exactly numFront number smaller or equal to k
  // And there is an additional k
  const numFront: number = N % 2 ? Math.floor(N / 2) : N / 2;

  nums.sort((a, b) => a - b);
  // Number that smaller or equal to k
  let pos = 0;
  for (; pos < N; pos++) {
    if (nums[pos] > k) break;
  }

  let ans = 0;
  let start = Math.min(pos, numFront);
  let end = Math.max(pos - 1, numFront);

  console.log(start, end);

  for (let i = start; i <= end; i++) {
    console.log(nums[i], k);
    ans += Math.abs(nums[i] - k);
  }

  return ans;
}

minOperationsToMakeMedianK([2, 5, 6, 8, 5], 7);
