function minimumCost(
  n: number,
  edges: number[][],
  query: number[][]
): number[] {
  class UnionFind {
    parent: number[];
    weights: number | null[];

    constructor(n: number) {
      // make set for each vertex
      this.parent = new Array(n).fill(0);
      this.weights = new Array(n).fill(null);

      for (let i = 0; i < n; i++) {
        this.parent[i] = i;
      }
    }

    find(x: number) {
      if (this.parent[x] === x) return x;

      this.parent[x] = this.find(this.parent[x]);
      return this.parent[x];
    }

    union(x: number, y: number, w: number) {
      let rootX = this.find(x);
      let rootY = this.find(y);

      // @ts-ignore
      if (this.weights[rootX] !== null) w &= this.weights[rootX];
      // @ts-ignore
      if (this.weights[rootY] !== null) w &= this.weights[rootY];

      console.log(rootX, rootY, w);

      this.parent[rootY] = rootX;
      // @ts-ignore
      this.weights[rootX] = w;
    }
  }

  const unionFind = new UnionFind(n);
  for (let edge of edges) {
    unionFind.union(edge[0], edge[1], edge[2]);
  }

  let ans: number[] = [];
  for (let q of query) {
    let rootX = unionFind.find(q[0]);
    let rootY = unionFind.find(q[1]);

    if (rootX !== rootY) {
      ans.push(-1);
    } else {
      // @ts-ignore
      ans.push(unionFind.weights[rootX] as number);
    }
  }

  return ans;
}

minimumCost(
  3,
  [
    [1, 0, 4],
    [0, 2, 5],
    [0, 2, 3],
    [0, 2, 14],
    [0, 2, 12],
    [2, 0, 14],
    [0, 2, 4],
  ],
  [[2, 1]]
);
