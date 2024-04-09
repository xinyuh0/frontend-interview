function longestMonotonicSubarray(nums: number[]): number {
  const N = nums.length;
  // length of subarray end with nums[i]
  let dpIncrease: number[] = new Array(N).fill(1);
  let dpDecrease: number[] = new Array(N).fill(1);

  let ans = 1;
  for (let i = 1; i < N; i++) {
    let j = i - 1;
    if (nums[j] < nums[i]) {
      dpIncrease[i] = Math.max(dpIncrease[i], dpIncrease[j] + 1);
    } else if (nums[j] > nums[i]) {
      dpDecrease[i] = Math.max(dpDecrease[i], dpDecrease[j] + 1);
    }

    ans = Math.max(dpIncrease[i], dpDecrease[i], ans);
  }

  return ans;
}

longestMonotonicSubarray([1, 4, 3, 3, 2]);
