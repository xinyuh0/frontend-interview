function _main(argv: string[]) {
  const [S, N, K] = argv[0].split(" ").map((x) => Number(x));

  // Initialize the costs matrix
  let costs: number[][] = [];
  for (let i = 0; i < S; i++) {
    costs.push(new Array(S).fill(0));
  }
  for (let i = 1; i <= N; i++) {
    const [x, y, cost] = argv[i].split(" ").map((x) => Number(x));
    costs[x][y] = cost;
  }

  // Compute prefix sum in the two-dimensional matrix
  // Initialize the prefix sum matrix
  let prefixSum: number[][] = [];
  for (let i = 0; i < S; i++) {
    prefixSum.push(new Array(S).fill(0));
  }

  for (let i = 0; i < S; i++) {
    for (let j = 0; j < S; j++) {
      let sum = costs[i][j];
      if (i > 0) {
        sum += prefixSum[i - 1][j];
      }
      if (j > 0) {
        sum += prefixSum[i][j - 1];
      }
      if (i > 0 && j > 0) {
        sum -= prefixSum[i - 1][j - 1];
      }
      prefixSum[i][j] = sum;
    }
  }

  const totalCost = prefixSum[S - 1][S - 1];
  let ans = Number.MAX_SAFE_INTEGER;
  // List all the possible ways to divide the matrix into 4 parts
  for (let X = 0; X <= S - K; X++) {
    for (let Y = 0; Y <= S - K; Y++) {
      let costNotIncluded = 0;
      // left bottom
      if (X > 0 && Y > 0) {
        costNotIncluded += prefixSum[X - 1][Y - 1];
      }
      // right bottom
      if (X > 0 && S - (Y + K) > 0) {
        costNotIncluded +=
          prefixSum[X - 1][S - 1] - prefixSum[X - 1][Y + K - 1];
      }
      // left top
      if (S - (X + K) > 0 && Y > 0) {
        costNotIncluded +=
          prefixSum[S - 1][Y - 1] - prefixSum[X + K - 1][Y - 1];
      }
      // right top
      if (S - (X + K) > 0 && S - (Y + K) > 0) {
        costNotIncluded +=
          prefixSum[S - 1][S - 1] -
          prefixSum[S - 1][Y + K - 1] -
          prefixSum[X + K - 1][S - 1] +
          prefixSum[X + K - 1][Y + K - 1];
      }
      ans = Math.min(ans, totalCost - costNotIncluded);
    }
  }

  console.log(ans);
}
