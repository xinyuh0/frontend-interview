function maximumSubarraySum(nums: number[], k: number): number {
  if (nums.length < k) return 0;

  // Sliding window

  // Number of different element in a sliding window
  let cnt = 0;
  // Map each number to its frequencies in the window
  let m: Map<number, number> = new Map<number, number>();

  let subArraySum = 0;
  // Initialize the first window
  for (let i = 0; i < k; i++) {
    if (!m.has(nums[i])) {
      cnt++;
      m.set(nums[i], 0);
    }

    m.set(nums[i], (m.get(nums[i]) as number) + 1);
    subArraySum += nums[i];
  }

  let ans = 0;
  if (cnt === k) {
    ans = Math.max(ans, subArraySum);
  }

  for (let i = 1; i + k - 1 < nums.length; i++) {
    // We are removing nums[i-1] and adding nums[i+k-1]

    // Remove
    m.set(nums[i - 1], (m.get(nums[i - 1]) as number) - 1);
    subArraySum -= nums[i - 1];
    if ((m.get(nums[i - 1]) as number) === 0) {
      m.delete(nums[i - 1]);
      cnt--;
    }

    // Add
    if (!m.has(nums[i + k - 1])) {
      cnt++;
      m.set(nums[i + k - 1], 0);
    }
    m.set(nums[i + k - 1], (m.get(nums[i + k - 1]) as number) + 1);
    subArraySum += nums[i + k - 1];

    if (cnt === k) {
      ans = Math.max(ans, subArraySum);
    }
  }

  return ans;
}

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
