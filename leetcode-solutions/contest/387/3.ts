function minimumDeletions(word: string, k: number): number {
  // Initialization
  const freqMap: Map<string, number> = new Map<string, number>();

  for (const c of word) {
    if (freqMap.has(c)) {
      freqMap.set(c, (freqMap.get(c) as number) + 1);
    } else {
      freqMap.set(c, 1);
    }
  }

  // Solve
  // Everytime, decrease one element by 1, our goal is to make sure diff between every two elements is no greater than k
  let values = Array.from(freqMap.values());
  values.sort((a, b) => a - b);
  let ans = Number.MAX_SAFE_INTEGER;

  // One solution is using backtrack, everytime either decrease the maximum element till it equals to min+k
  // or delete the minimum element. --> Exceed Time Limit
  // Another solution is to using 'sliding window', listing every range
  for (const start of values) {
    const end = start + k;
    let cnt = 0;
    for (const val of values) {
      if (val < start) {
        cnt += val;
      } else if (val > end) {
        cnt += val - end;
      }
    }

    ans = Math.min(cnt, ans);
  }

  return ans;
}

// console.log(minimumDeletions("k", 10000));
