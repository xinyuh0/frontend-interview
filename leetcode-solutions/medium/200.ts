import { DisjointSet } from "../ds/union-find/union";

function numIslands(grid: string[][]): number {
    // Empty grid
    if (grid.length === 0) return 0;

    const set = new DisjointSet<number>();

    // Represent position as a number: i * n + j
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                const idx = i * n + j;
                set.makeSet(idx);

                // Find adjacent neighbors
                // search for only up and left directions to avoid redundant search
                // Up
                if (i > 0 && grid[i - 1][j] === '1') {
                    const neighborIdx = (i - 1) * n + j;
                    set.union(idx, neighborIdx);
                }

                // left
                if (j > 0 && grid[i][j - 1] === '1') {
                    const neighborIdx = i * n + j - 1;
                    set.union(idx, neighborIdx);
                }
            }
        }
    }

    return set.numberOfSets;
};

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]))