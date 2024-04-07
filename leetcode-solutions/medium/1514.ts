type P = {
  v: number;
  prob: number;
};

function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start_node: number,
  end_node: number
): number {
  const E = edges.length;

  // Initialization
  const probs: number[] = new Array(n).fill(0);
  probs[start_node] = 1;

  const adjacentList: Array<P[]> = [];
  for (let i = 0; i < n; i++) {
    adjacentList.push([]);
  }
  for (let i = 0; i < E; i++) {
    const edge = edges[i];
    const from = edge[0];
    const to = edge[1];

    adjacentList[from].push({ v: to, prob: succProb[i] });
    adjacentList[to].push({ v: from, prob: succProb[i] });
  }

  // Solve with Dijkstra's algorithm
  // [v, probability from source to v]
  const q: P[] = [
    {
      v: start_node,
      prob: 1,
    },
  ];

  while (q.length) {
    const { v, prob } = q.shift() as P;

    if (probs[v] > prob) continue;

    // Handle neighbors of the vertices
    for (const p of adjacentList[v]) {
      const { v: neighbor, prob } = p;

      if (probs[v] * prob > probs[neighbor]) {
        probs[neighbor] = probs[v] * prob;
        q.push({ v: neighbor, prob: probs[neighbor] });
      }
    }

    q.sort((x, y) => y.prob - x.prob);
  }

  return probs[end_node];
}

console.log(
  maxProbability(
    5,
    [
      [2, 3],
      [1, 2],
      [3, 4],
      [1, 3],
      [1, 4],
      [0, 1],
      [2, 4],
      [0, 4],
      [0, 2],
    ],
    [0.06, 0.26, 0.49, 0.25, 0.2, 0.64, 0.23, 0.21, 0.77],
    0,
    3
  )
);
