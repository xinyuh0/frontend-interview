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

  let ans = "";
  for (let i = 1; i <= N; i++) {
    ans += i % 3 === 0 ? "x" : "o";
  }

  console.log(ans);
});
