function countPairs(n: number, edges: number[][]): number {
  // For easier dfs, construct a adjacent matrix
  const adjacentList: Map<number, number[]> = new Map<number, number[]>();
  for (let edge of edges) {
    let [from, to] = edge;

    if (!adjacentList.has(from)) {
      adjacentList.set(from, []);
    }

    if (!adjacentList.has(to)) {
      adjacentList.set(to, []);
    }

    (adjacentList.get(from) as number[]).push(to);
    (adjacentList.get(to) as number[]).push(from);
  }

  // Count the number of connected components
  const visited: Set<number> = new Set<number>();
  const dfs = (city: number) => {
    if (visited.has(city)) return;

    visited.add(city);
    // There are cities that have no neighbors
    if (adjacentList.has(city)) {
      let neighbors = adjacentList.get(city) as number[];
      for (let neighbor of neighbors) {
        dfs(neighbor);
      }
    }
  };

  let prevSize = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      // Update answer
      ans += (visited.size - prevSize) * prevSize;
      prevSize = visited.size;
    }
  }

  return ans;
}

countPairs(100000, []);
