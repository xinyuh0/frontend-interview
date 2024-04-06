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
  const N = Number(inputs[0]);

  let points: number[][] = [];
  for (let i = 1; i <= N; i++) {
    points.push(inputs[i].split(" ").map((x) => Number(x)));
  }

  const ans: number[] = [];
  for (let i = 0; i < N; i++) {
    const x1 = points[i][0];
    const y1 = points[i][1];
    let maxDis = 0;
    let idx = -1;

    for (let j = 0; j < N; j++) {
      if (i === j) continue;

      const x2 = points[j][0];
      const y2 = points[j][1];

      const dis = Math.pow((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2), 0.5);
      //   console.log(x1, y1, x2, y2, dis);
      if (dis > maxDis) {
        idx = j;
        maxDis = dis;
      }
    }

    ans.push(idx + 1);
  }

  for (const id of ans) {
    console.log(id);
  }
});
