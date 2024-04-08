const findKthMinimumVulnerability = (
  k: number,
  m: number,
  vulnerability: number[]
): number[] => {
  // find kth minimum vulnerability of each group
  const N = vulnerability.length;

  let ans: number[] = [];
  // O(N*MlogM)
  for (let i = 0; i + m <= N; i++) {
    const group = vulnerability.slice(i, i + m);
    group.sort((a, b) => a - b);
    ans.push(group[k - 1]);
  }

  return ans;
};

console.log(findKthMinimumVulnerability(2, 3, [1, 3, 2, 1]));
