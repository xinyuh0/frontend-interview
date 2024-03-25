// 2024.3.25 18:16 ~ 19:16
// 1 hr
function combinationSum2(candidates: number[], target: number): number[][] {
  // sort from large to small
  candidates.sort((a, b) => b - a);
  // frequency
  const m: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < candidates.length; i++) {
    if (!m.has(candidates[i])) {
      m.set(candidates[i], 1);
    } else {
      const n = m.get(candidates[i]) as number;
      m.set(candidates[i], n + 1);
    }
  }

  const sequence: number[] = [];
  const ans: number[][] = [];
  const dfs = (idx: number, _target: number) => {
    // out of range
    if (idx > candidates.length) {
      return;
    }

    if (_target === 0) {
      ans.push([...sequence]);
      return;
    }

    // choose candidate[idx] for [0, n] times
    const n = m.get(candidates[idx]) as number;
    for (let i = 0; i <= n; i++) {
      if (_target - i * candidates[idx] < 0) {
        break;
      }

      sequence.push(...candidates.slice(idx, idx + i));
      dfs(idx + n, _target - i * candidates[idx]);
      for (let j = 1; j <= i; j++) {
        sequence.pop();
      }
    }
  };

  dfs(0, target);
  return ans;
}

// console.log(combinationSum2([3, 1, 3, 5, 1, 1], 8));
