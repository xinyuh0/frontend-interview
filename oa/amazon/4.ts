const findOverlappingTime = (intervals: number[][]): number[][] => {
  const _intervals = [...intervals];
  _intervals.sort((a, b) => a[0] - b[0]);

  let start: number = _intervals[0][0] as number;
  let end: number = _intervals[0][1] as number;
  let flag = false;

  const ans: number[][] = [];
  for (let i = 1; i < _intervals.length; i++) {
    const s = _intervals[i][0];
    const e = _intervals[i][1];

    if (s <= end) {
      // has overlap
      flag = true;
      start = Math.min(s, start);
      end = Math.max(e, end);
    } else {
      // no overlap
      if (flag) {
        ans.push([start, end]);
        flag = false;
      }
      start = s;
      end = e;
    }
  }

  // handle last element
  if (flag) {
    ans.push([start, end]);
    flag = false;
  }

  return ans;
};

console.log(
  findOverlappingTime([
    [7, 7],
    [2, 3],
    [6, 11],
    [1, 2],
  ])
);
