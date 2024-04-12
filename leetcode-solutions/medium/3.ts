function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  const set = new Set<string>();

  let l = 0,
    r = 0,
    maxLen = 1;

  while (l < s.length) {
    while (r !== s.length && !set.has(s[r])) {
      set.add(s[r]);
      r++;
    }

    maxLen = Math.max(maxLen, r - l);
    // console.log(maxLen, s.substring(l, r));

    if (r === s.length) break;

    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
  }

  return maxLen;
}
