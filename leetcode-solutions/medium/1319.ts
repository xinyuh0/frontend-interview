function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) return -1;

  // Number of connected components - 1

  // Union Find
  class UnionFind {
    private parent: Map<number, number>;
    public cnt: number;

    constructor() {
      this.parent = new Map<number, number>();
      this.cnt = 0;
    }

    makeSet(x: number) {
      this.parent.set(x, x);
      this.cnt++;
    }

    find(x: number): number {
      if ((this.parent.get(x) as number) === x) return x;

      this.parent.set(x, this.find(this.parent.get(x) as number));
      return this.parent.get(x) as number;
    }

    union(x: number, y: number) {
      const rootx = this.find(x) as number;
      const rooty = this.find(y) as number;

      if (rootx !== rooty) {
        this.parent.set(rooty, rootx);
        this.cnt--;
      }
    }
  }

  const unionFind = new UnionFind();

  for (let i = 0; i < n; i++) unionFind.makeSet(i);

  for (const c of connections) {
    unionFind.union(c[0], c[1]);
  }

  return unionFind.cnt - 1;
}
