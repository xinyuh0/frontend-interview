const maximizeNegativePnLMonths = (PnL: number[]): number => {
  let ans = 0;

  // find the maximum number of negative months, so that the profits still add up to positive

  // greedy
  const _PnL = [...PnL];
  _PnL.sort((a, b) => a - b);
  let sum = _PnL.reduce((prev, curr) => prev + curr, 0);

  while (true) {
    sum -= 2 * _PnL[ans];

    if (sum <= 0) {
      break;
    }

    ans++;
  }

  return ans;
};

console.log(maximizeNegativePnLMonths([5, 3, 1, 2]));
