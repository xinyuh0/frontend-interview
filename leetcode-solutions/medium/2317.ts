function maximumXOR(nums: number[]): number {
  let nums_ = [...nums];
  let pos = 0;
  let ans = 0;
  while (nums_.filter((n) => n > 0).length) {
    // By some times of operations, we can change any bits of a num from 1 to 0
    // therefore, we only need to make sure every bit has one '1'
    const bits = nums_.map((n) => n & 1).filter((n) => n > 0);
    if (bits.length > 0) {
      ans += Math.pow(2, pos);
    }

    nums_ = nums_.map((n) => n >> 1);
    pos++;
  }

  return ans;
}
