function generatePalindromes(s: string): string[] {
  // char to frequency
  const m: Map<string, number> = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (m.has(s[i])) {
      m.set(s[i], (m.get(s[i]) as number) + 1);
    } else {
      m.set(s[i], 1);
    }
  }

  let n = 0;
  let center = "";
  const chars: string[] = [];

  for (const c of m.keys()) {
    let freq = m.get(c) as number;

    if (freq % 2 !== 0) {
      n++;
      center = c;
    }

    if (n > 1) break;

    freq = Math.floor(freq / 2);

    if (freq > 0) {
      for (let i = 1; i <= freq; i++) {
        chars.push(c);
      }
    }
  }

  // more than one char occurs odd times
  if (n > 1) return [];

  // solve
  const used = new Array<boolean>(chars.length).fill(false);
  const ans: string[] = [];
  const sequence: string[] = [];

  const backtrack = () => {
    if (sequence.length === chars.length) {
      ans.push(sequence.join("") + center + [...sequence].reverse().join(""));
      return;
    }

    for (let i = 0; i < used.length; i++) {
      if (!used[i] && !(i > 0 && chars[i] === chars[i - 1] && !used[i - 1])) {
        sequence.push(chars[i]);
        used[i] = true;
        backtrack();
        sequence.pop();
        used[i] = false;
      }
    }
  };

  backtrack();
  return ans;
}
