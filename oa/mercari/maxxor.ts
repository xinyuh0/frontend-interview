const maxXor = (lo: number, hi: number, k: number) => {
  const m: Map<number, boolean> = new Map<number, boolean>();

  for (let i = lo; i <= hi; i++) {
    m.set(i, true);
  }

  let found = false;
  for (let ans = k; ans >= 0; ans--) {
    // a ^ b = x
    // x ^ a = b
    for (let i = lo; i <= hi; i++) {
      if (m.has(ans ^ i)) {
        found = true;
        break;
      }
    }

    if (found) {
      return ans;
    }
  }
};

const bruteForce = (lo: number, hi: number, k: number) => {
  let ans = 0;

  for (let b = lo + 1; b <= hi; b++) {
    for (let a = lo; a < b; a++) {
      if ((a ^ b) <= k) {
        ans = Math.max(ans, a ^ b);
      }
    }
  }

  return ans;
};

const main = () => {
  for (let i = 0; i < 100; i++) {
    let lo = Math.floor(Math.random() * 10000);
    let hi = Math.floor(Math.random() * 10000);
    let k = Math.floor(Math.random() * 10000);

    if (hi < lo) {
      const tmp = lo;
      lo = hi;
      hi = tmp;
    }

    const res1 = bruteForce(lo, hi, k);
    const res2 = maxXor(lo, hi, k);

    console.log(
      "low",
      lo,
      "high",
      hi,
      "k",
      k,
      "brute force",
      res1,
      "maxXor",
      res2
    );
  }
};

main();
// console.log(maxXor(3, 5, 6));
