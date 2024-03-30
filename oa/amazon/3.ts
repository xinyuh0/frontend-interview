const countFault = (n: number, logs: string[]) => {
  const faultCounts = new Array<number>(n + 1).fill(0);

  let ans = 0;
  for (const log of logs) {
    const _ = log.split(" ");
    const serverId = Number(_[0][1]);
    const hasError = _[1] === "error";

    if (hasError) {
      if (faultCounts[serverId] === 2) {
        faultCounts[serverId] = 0;
        console.log(`server s${serverId} error, replacing...`);
        ans++;
      } else {
        faultCounts[serverId]++;
      }
    }
  }

  return ans;
};

console.log(
  countFault(2, [
    "s1 error",
    "s1 error",
    "s2 error",
    "s1 error",
    "s1 error",
    "s2 success",
  ])
);
