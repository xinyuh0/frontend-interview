function findMaximumXOR(nums: number[]): number {
  let ans = 0;
  for (let pos = 32; pos >= 1; pos--) {
    const val = Math.pow(2, pos - 1);

    const m: Map<number, boolean> = new Map<number, boolean>();
    for (const n of nums) {
      m.set(n >> (pos - 1), true);
    }

    ans += val;
    let found = false;
    for (const n of nums) {
      // x ^ a = b
      if (m.has((n >> (pos - 1)) ^ (ans >> (pos - 1)))) {
        found = true;
        break;
      }
    }

    if (!found) {
      ans -= val;
    }
  }

  return ans;
}
