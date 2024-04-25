function smallestCommonElement(mat: number[][]): number {
  const M = mat.length;
  const N = mat[0].length;

  const m: Map<number, number> = new Map();

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (m.has(mat[i][j])) {
        m.set(mat[i][j], (m.get(mat[i][j]) as number) + 1);
      } else {
        m.set(mat[i][j], 1);
      }

      if ((m.get(mat[i][j]) as number) === M) {
        return mat[i][j];
      }
    }
  }

  return -1;
}
