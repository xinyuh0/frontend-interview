function treeDiameter(edges: number[][]): number {
  edges = edges.map((edge) => {
    if (edge[0] > edge[1]) {
      return [edge[1], edge[0]];
    } else {
      return [...edge];
    }
  });

  // The tree only has one node
  if (edges.length === 0) return 0;

  // Adjacent list
  const m: Map<number, number[]> = new Map<number, number[]>();

  for (const edge of edges) {
    const from = edge[0];
    const to = edge[1];

    if (m.has(from)) {
      m.set(from, [...(m.get(from) as number[]), to]);
    } else {
      m.set(from, [to]);
    }
  }

  let ans = 0;
  const dfs = (index: number): number => {
    // Leaf
    if (!m.has(index)) {
      return 1;
    }

    const heights: number[] = [];
    // Non-leaf
    for (const child of m.get(index) as number[]) {
      heights.push(dfs(child));
    }
    heights.sort((a, b) => b - a);

    let len = heights[0];
    if (heights.length > 1) {
      len += heights[1];
    }
    ans = Math.max(ans, len);

    return heights[0] + 1;
  };

  // we need to start from a node that has no indegrees
  dfs(0);

  return ans;
}

treeDiameter([
  [1, 0],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5],
]);
