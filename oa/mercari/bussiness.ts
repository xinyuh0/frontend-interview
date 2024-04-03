const maxProfit = (costs: number[], k: number) => {
  const N = Math.pow(10, 9) + 7;
  // costs: [20, 30, 40, 50]
  // profits: [1, 2, 4, 8]
  // k: 100
  // compute maximal profit
  // Solve
  // 2^i > 1 + 2^1 + ... + 2^(i-1)
  let balance = k;
  let totalProfit = 0;
  for (let i = costs.length - 1; i >= 0; i--) {
    const cost = costs[i];
    const profit = Math.pow(2, i);

    if (balance > cost) {
      totalProfit += profit;
      totalProfit %= N;
      balance -= cost;
    }
  }

  return totalProfit;
};
