const maxXor = (lo: number, hi: number, k: number) => {};

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
