function searchInsert(nums: number[], target: number): number {
  if (nums.length === 0) return 0;

  // insert at position 0 => target < nums[0]
  if (nums[0] >= target) return 0;

  // insert at position n => nums[n-1] < target
  if (nums[nums.length - 1] < target) return nums.length;

  let pos = -1;
  // insert at position i => nums[i-1] < target <= nums[i]
  // Binary search in range [start, end]
  const search = (start: number, end: number) => {
    if (start > end) return;

    const mid = Math.floor((start + end) / 2);

    if (nums[mid - 1] < target && target <= nums[mid]) pos = mid;
    else if (target <= nums[mid - 1]) search(start, mid - 1);
    else search(mid + 1, end);
  };

  search(1, nums.length - 1);

  return pos;
}
