function isOneEditDistance(s: string, t: string): boolean {
  if (Math.abs(s.length - t.length) >= 2) return false;

  // change
  if (s.length === t.length) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== t[i]) cnt++;

      if (cnt > 1) return false;
    }

    return cnt === 1;
  }

  if (s.length > t.length) {
    let tmp = s;
    s = t;
    t = tmp;
  }

  // insert
  let pos1 = 0;
  let pos2 = 0;
  let cnt = 0;
  while (pos1 < s.length) {
    if (s[pos1] === t[pos2]) {
      pos1++;
      pos2++;
    } else {
      cnt++;
      pos2++;
    }

    if (cnt > 1) return false;
  }

  return true;
}
