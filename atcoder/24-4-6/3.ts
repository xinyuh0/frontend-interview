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
  const m: Map<number, number> = new Map<number, number>();

  for (let i = 1; i <= N; i++) {
    const input = inputs[i].split(" ");
    const a = Number(input[0]);
    const c = Number(input[1]);

    if (m.has(c)) {
      const minA = m.get(c) as number;
      if (a < minA) {
        m.set(c, a);
      }
    } else {
      m.set(c, a);
    }
  }

  let maxA = 0;
  for (const c of m.keys()) {
    const a = m.get(c) as number;
    maxA = Math.max(maxA, a);
  }

  console.log(maxA);
});
