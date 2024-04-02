const findMaximumMex = (arr: number[], x: number): number => {
  // -> to form a consecutive sequence start from 0, as long as possible

  // can add (or substract) x to any element as many times as you want
  // which means we can get arr[i]%x + k*x after some operations

  // Initialization
  const m: Map<number, number> = new Map<number, number>();
  for (const n of arr) {
    const key = n % x;
    if (m.has(key)) {
      m.set(key, (m.get(key) as number) + 1);
    } else {
      m.set(key, 1);
    }
  }

  // Solve
  let ans = 0;
  // At least how many complete (min)*x + [0, ..., x-1] we can get
  let min = Number.MAX_SAFE_INTEGER;
  const keys = Array.from(m.keys());
  keys.sort((a, b) => a - b);
  for (const key of keys) {
    const freq = m.get(key) as number;
    min = Math.min(min, freq);
  }
  ans += min * x;

  // Length of uncomplete sequence
  for (const key of keys) {
    const freq = m.get(key) as number;
    if (freq > min) {
      ans++;
    } else {
      break;
    }
  }

  return ans;
};

console.log(findMaximumMex([0, 1, 2, 1, 3], 3));
