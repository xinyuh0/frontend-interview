function makeAntiPalindrome(s: string): string {
  const N = s.length;
  // Assume that with swap operations, we can get the full permuations of the original `s`
  // Find a permutation that is anti-palindrome & lexicographically smallest

  // Map letter to frequency
  const m: Map<string, number> = new Map<string, number>();
  // Initialization
  for (const letter of s) {
    if (m.has(letter)) {
      m.set(letter, (m.get(letter) as number) + 1);
    } else {
      m.set(letter, 1);
    }
  }

  const frequencies: number[] = Array.from(m.values());
  frequencies.sort((a, b) => b - a);
  // there is a letter that occurs more the half of the total number of letters
  // it must show in both first half & second half of `s`
  if (frequencies[0] > Math.ceil(N / 2)) {
    return "-1";
  }

  let ans = s
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");

  // palindrome part can only appear in the middle, check whether it appears in the middle
  let l = N % 2 === 1 ? Math.floor(N / 2) - 1 : N / 2 - 1;
  let r = N % 2 === 1 ? Math.floor(N / 2) + 1 : N / 2;

  // need adjust
  if (ans[l] === ans[r]) {
    const c = ans[l];

    while (ans[l] === c) {
      l--;
    }
    l++;

    while (ans[r] === c) {
      r++;
    }
    r--;

    // keep [l, mid], exchange [mid, mid+leftLength] with [r, ]
    for (let i = 0; i <= Math.floor(N / 2) - 1 - l; i++) {
      const j = Math.ceil(N / 2) + i;
      const tmp = ans[j];
      ans = ans.slice(0, j) + ans[r + 1 + i] + ans.slice(j + 1);
      ans = ans.slice(0, r + 1 + i) + tmp + ans.slice(r + 2 + i);
    }
  }

  // after adjust
  return ans;
}

console.log(makeAntiPalindrome("aacccdd"));
