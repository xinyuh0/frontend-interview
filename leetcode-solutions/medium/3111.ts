function minRectanglesToCoverPoints(points: number[][], w: number): number {
  // Only need to consider the x-axis
  const x = points.map((p) => p[0]).sort((a, b) => a - b);

  let ans = 0;
  let start = -1;

  for (let i = 0; i < x.length; i++) {
    if (x[i] > start) {
      ans++;
      start = x[i] + w;
    }
  }

  return ans;
}
