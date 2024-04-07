function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  // Initialization
  const adjacentList: number[][] = [];
  for (let i = 0; i < n; i++) {
    adjacentList.push([]);
  }

  for (const edge of edges) {
    const from = edge[0];
    const to = edge[1];
    adjacentList[from].push(to);
    adjacentList[to].push(from);
  }

  // Compute the distance from source to every other vertex
  const distances: number[] = new Array(n).fill(-1);
  distances[source] = 0;

  // BFS
  let dis = 0;
  const q: number[] = [source];
  while (q.length) {
    const len = q.length;

    for (let i = 1; i <= len; i++) {
      const v = q.shift() as number;
      for (const neighbor of adjacentList[v]) {
        // This node hasn't been visited
        if (distances[neighbor] === -1) {
          q.push(neighbor);
          distances[neighbor] = dis + 1;
        }
      }
    }

    dis++;
  }

  return distances[destination] !== -1;
}
