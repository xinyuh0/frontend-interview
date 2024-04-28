function longestSubarray(nums: number[]): number {
  // a AND b < a or b
  // find the largest number in the list, return the length of continuous number
  let largestNumber = Math.max(...nums);

  let length = 0;
  if (nums[0] === largestNumber) length = 1;

  let maxLength = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === largestNumber && nums[i] === nums[i - 1]) {
      length++;
      maxLength = Math.max(maxLength, length);
    } else if (nums[i] === largestNumber && nums[i] !== nums[i - 1]) {
      length = 1;
    }
  }

  return maxLength;
}
