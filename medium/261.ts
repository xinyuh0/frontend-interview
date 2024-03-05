import { DisjointSet } from '../ds/union-find/union';

// A tree is a Directed Acyclic Graph (DAG)
// edge: [i, j]
// Solution 1
function _validTree(n: number, edges: number[][]): boolean {
    const adjacentList: number[][] = [];

    for (let i = 0; i < n; i++) {
        adjacentList.push([]);
    }

    for (const edge of edges) {
        adjacentList[edge[0]].push(edge[1]);
        adjacentList[edge[1]].push(edge[0]);
    }

    console.log(adjacentList);

    let visited = new Array<boolean>(n).fill(false);
    let parent = new Array<number>(n).fill(-1);
    let isTree = true;

    const dfs = (node: number) => {
        visited[node] = true;

        for (const adjacentNode of adjacentList[node]) {
            if (adjacentNode !== parent[node]) {
                if (!visited[adjacentNode]) {
                    parent[adjacentNode] = node;
                    dfs(adjacentNode);
                } else {
                    isTree = false;
                }
            }
        }
    }

    dfs(0);

    return isTree && visited.every(x => x === true);
}

// console.log(validTree(3, [[0, 1], [0, 2], [1, 2]]))

// Solution 2
function validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) return false;

    const disjointSet = new DisjointSet();
    for (let i = 0; i < n; i++) {
        disjointSet.makeSet(i);
    }

    for (const edge of edges) {
        disjointSet.union(edge[0], edge[1]);
    }

    return disjointSet.numberOfSets === 1;
}  