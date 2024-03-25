// 2024.3.25 21:00 ~ 21:05
// 5 min
function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  const pre = getRow(rowIndex - 1);
  const curr = [1];

  for (let i = 0; i < pre.length - 1; i++) {
    curr.push(pre[i] + pre[i + 1]);
  }

  curr.push(1);
  return curr;
}
