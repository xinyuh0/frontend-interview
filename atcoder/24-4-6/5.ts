import * as readline from "readline";

const stream = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs: string[] = [];

stream.on("line", (line) => {
  inputs.push(line);
});

stream.on("close", () => {
  // Number of vertices
  const N = Number(inputs[0]);

  // Initialization
  const adjacentList: number[][] = [];
  const distances: number[][] = [];
  for (let i = 0; i <= N; i++) {
    adjacentList.push([]);
    distances.push([]);
    distances[i] = new Array(N + 1).fill(0);
  }

  // Edges
  for (let i = 1; i <= N - 1; i++) {
    const line = inputs[i].split(" ").map((x) => Number(x));

    const from = Math.min(...line);
    const to = Math.max(...line);

    adjacentList[from].push(to);
    adjacentList[to].push(from);
  }

  // C
  const C: number[] = inputs[N].split(" ").map((x) => Number(x));
  C.unshift(0);

  // console.log(adjacentList, C);

  let ans = Number.MAX_SAFE_INTEGER;

  const bfs = (idx: number) => {
    let val = 0;
    let visited = new Array(N + 1).fill(false);
    const q: number[] = [...adjacentList[idx]];

    let dis = 1;
    visited[idx] = true;
    while (q.length) {
      let k = q.length;
      while (k) {
        const neighbor = q.shift() as number;
        distances[idx][neighbor] = dis;
        val += C[neighbor] * dis;
        visited[neighbor] = true;
        for (const n of adjacentList[neighbor]) {
          if (!visited[n]) {
            q.push(n);
          }
        }
        k--;
      }
      dis++;
    }

    ans = Math.min(ans, val);
  };

  for (let i = 1; i <= N; i++) {
    bfs(i);
  }

  console.log(ans);
});
