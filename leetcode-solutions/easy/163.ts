function findMissingRanges(
  nums: number[],
  lower: number,
  upper: number
): number[][] {
  nums.unshift(lower);
  nums.push(upper);

  const ans: number[][] = [];
  for (let i = 1; i < nums.length; i++) {
    let l = nums[i - 1];
    let r = nums[i];

    // lower / upper should be included
    l = i - 1 === 0 ? l : l + 1;
    r = i === nums.length - 1 ? r : r - 1;

    if (l > r) continue;

    ans.push([l, r]);
  }

  return ans;
}
