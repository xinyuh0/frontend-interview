function countAlternatingSubarrays(nums: number[]): number {
  let ans = nums.length;

  let cnt = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      cnt++;
      if (i === nums.length - 1) {
        ans += ((cnt - 1) * cnt) / 2;
      }
    } else {
      ans += ((cnt - 1) * cnt) / 2;
      cnt = 1;
    }
  }

  return ans;
}

console.log(countAlternatingSubarrays([0, 1, 0, 1]));
