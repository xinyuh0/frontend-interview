function numberOfGoodSubarraySplits(nums: number[]): number {
  // (a * b) MOD k = (a MOD k) * (b MOD k) MOD k

  const MOD = 10e8 + 7;
  let numsOfZeros: number[] = [];

  // Current number of continuous zeros
  let flag = true;
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      flag = false;
      numsOfZeros.push(cnt);
      cnt = 0;
      continue;
    }
    cnt++;
  }
  numsOfZeros.push(cnt);

  // If there is no ones in the array, return 0
  if (flag) return 0;

  let res = numsOfZeros
    .slice(1, numsOfZeros.length - 1)
    .reduce((prev, curr) => (prev * (curr + 1)) % MOD, 1);

  return res;
}

numberOfGoodSubarraySplits([0, 1, 0, 0, 1]);
