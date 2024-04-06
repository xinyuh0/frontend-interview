const shortestPath = (N: number, X: number, Y: number) => {
  if (X > Y) {
    const tmp = X;
    X = Y;
    Y = tmp;
  }

  const distances: number[] = new Array(N + 1).fill(0);

  // The answer should add up to (N-1)*N/2
  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      let dis = Math.min(j - i, Math.abs(X - i) + Math.abs(Y - j) + 1);
      distances[dis]++;
    }
  }

  return distances.slice(1);
};

console.log(shortestPath(5, 2, 3));
