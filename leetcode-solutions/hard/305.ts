function numIslands2(m: number, n: number, positions: number[][]): number[] {
  class UnionFind<T> {
    private parent: Map<T, T>;
    private _numSets: number;

    constructor() {
      this._numSets = 0;
      this.parent = new Map<T, T>();
    }

    get numSets(): number {
      return this._numSets;
    }

    makeSet(x: T) {
      if (!this.parent.has(x)) {
        this.parent.set(x, x);
        this._numSets++;
      }
    }

    find(x: T): T | undefined {
      // x doesn't exist in the disjoint set
      if (!this.parent.has(x)) {
        return undefined;
      }

      if ((this.parent.get(x) as T) === x) {
        return x;
      }

      this.parent.set(x, this.find(this.parent.get(x) as T) as T);
      return this.parent.get(x);
    }

    union(x: T, y: T) {
      const rootX = this.find(x) as T;
      const rootY = this.find(y) as T;
      //   console.log(x, rootX, y, rootY);

      if (rootX !== rootY) {
        this.parent.set(rootY, rootX);
        this._numSets--;
      }
    }
  }

  const unionFind: UnionFind<number> = new UnionFind<number>();
  // Initialization
  const grids: number[][] = [];
  for (let i = 0; i < m; i++) {
    grids.push([]);
    for (let j = 0; j < n; j++) {
      grids[i].push(0);
    }
  }

  // Solve
  const directions: number[][] = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  let ans: number[] = [];
  for (const pos of positions) {
    console.log(pos);
    const i = pos[0];
    const j = pos[1];
    grids[i][j] = 1;

    const idx = i * n + j;
    unionFind.makeSet(idx);

    for (const direction of directions) {
      if (
        i + direction[0] < m &&
        i + direction[0] >= 0 &&
        j + direction[1] < n &&
        j + direction[1] >= 0 &&
        grids[i + direction[0]][j + direction[1]] === 1
      ) {
        const _idx = (i + direction[0]) * n + j + direction[1];
        unionFind.union(idx, _idx);
      }
    }

    ans.push(unionFind.numSets);
  }

  return ans;
}

console.log(
  numIslands2(3, 3, [
    [0, 1],
    [1, 2],
    [2, 1],
    [1, 0],
    [0, 2],
    [0, 0],
    [1, 1],
  ])
);
