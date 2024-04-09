function carPooling(trips: number[][], capacity: number): boolean {
  const to: number[] = trips.map((tri) => tri[2]);
  to.sort((a, b) => b - a);
  const lastTo = to[0];

  const diff: number[] = new Array(lastTo + 1).fill(0);
  for (const trip of trips) {
    const num = trip[0];
    const from = trip[1];
    const to = trip[2];

    diff[from] += num;
    diff[to] -= num;
  }

  let sum = 0;
  for (let i = 1; i < diff.length; i++) {
    sum += diff[i];

    if (sum > capacity) return false;
  }

  return true;
}
