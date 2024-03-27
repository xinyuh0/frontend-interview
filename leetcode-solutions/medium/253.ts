function minMeetingRooms(intervals: number[][]): number {
  // sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // for each room occupied, there is a corresponding endTime
  // if it is not occupied, set endTime to -1
  const rooms: number[] = [];
  const endTime: number[] = [];

  let ans = 0;

  const _findAvaliableRoom = (): number => {
    let idx = endTime.indexOf(-1);

    if (idx === -1) {
      rooms.push(ans);
      idx = ans;
      ans++;
    }

    return idx;
  };

  const _freeRoom = (time: number) => {
    for (let i = 0; i < endTime.length; i++) {
      if (time >= endTime[i]) {
        endTime[i] = -1;
      }
    }
  };

  for (let i = 0; i < intervals.length; i++) {
    _freeRoom(intervals[i][0]);
    const idx = _findAvaliableRoom();
    endTime[idx] = intervals[i][1];
  }

  return ans;
}
