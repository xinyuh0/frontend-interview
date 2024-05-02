function minimumPartition(s: string, k: number): number {
  const L = k.toString().length;

  // Greedy
  let tmp = s;
  let ans = 0;
  while (tmp.length > 0) {
    if (Number(tmp.substring(0, L)) <= k) {
      tmp = tmp.substring(Math.min(L, tmp.length));
    } else {
      if (L - 1 >= 1) {
        tmp = tmp.substring(Math.min(L - 1, tmp.length));
      } else {
        return -1;
      }
    }

    ans++;
  }

  return ans;
}

console.log(minimumPartition("165462", 60));
