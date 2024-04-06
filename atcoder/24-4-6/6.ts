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
  const line = inputs[0].split(" ").map((x) => Number(x));
  const N = line[0];
  const M = line[1];

  const nums: number[][] = [];
  for (let i = 0; i < N; i++) {
    nums.push([]);
    nums[i] = inputs[i + 1].split(" ").map((x) => Number(x));
  }

  // key: 'i+number'
  // value: [idx1, idx2, ...]
  let m: Map<string, number[]> = new Map<string, number[]>();
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const key = `${j}+${nums[i][j]}`;
      if (m.has(key)) {
        const indices = m.get(key) as number[];
        m.set(key, [...indices, i]);
      } else {
        m.set(key, [i]);
      }
    }
  }

  let ans = 0;
  //   console.log(nums);
  for (let i = 0; i < N; i++) {
    const freqMap: Map<number, number> = new Map<number, number>();
    for (let j = 0; j < M; j++) {
      const key = `${j}+${nums[i][j]}`;
      let indices = [...(m.get(key) as number[])];
      indices = indices.filter((x) => x > i);
      //   console.log(`nums[${i}][${j}]: ${nums[i][j]}, indices: ${indices}`);
      for (const idx of indices) {
        if (freqMap.has(idx)) {
          freqMap.set(idx, (freqMap.get(idx) as number) + 1);
        } else {
          freqMap.set(idx, 1);
        }
      }
    }

    for (const freq of freqMap.values()) {
      if (freq % 2 === 1) {
        ans++;
      }
    }
  }

  console.log(ans);
});
