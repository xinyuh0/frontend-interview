function getSmallestString(s: string, k: number): string {
  const distance = (l1: string, l2: string) => {
    let diff = Math.abs(l1.charCodeAt(0) - l2.charCodeAt(0));

    return diff > 13 ? 26 - diff : diff;
  };

  // Greedy
  const BASE_CODE = "a".charCodeAt(0);

  // Solve
  // Part of k that has been used
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i];
    // Find the smallest tLetter we can get
    for (let j = 0; j < 26; j++) {
      let dis = distance(sLetter, String.fromCharCode(BASE_CODE + j));
      if (dis <= k) {
        ans += String.fromCharCode(BASE_CODE + j);
        k -= dis;
        break;
      }
    }

    if (k === 0) {
      ans += s.slice(i + 1);
      break;
    }
  }

  return ans;
}

getSmallestString("z", 0);
