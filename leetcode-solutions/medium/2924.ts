function findChampion(n: number, edges: number[][]): number {
  // Solution 1: Topological sort
  //   let indeg: number[] = new Array(n).fill(0);
  //   for (const edge of edges) {
  //     const [_, to] = edge;
  //     indeg[to]++;
  //   }
  //   if (indeg.filter((val) => val === 0).length !== 1) return -1;
  //   return indeg.indexOf(0);

  let s: Set<number> = new Set();

  for (let i = 0; i < n; i++) {
    s.add(i);
  }

  for (const edge of edges) {
    const [_, to] = edge;
    if (s.has(to)) {
      s.delete(to);
    }
  }

  if (s.size !== 1) return -1;

  return s.values().next().value;
}
