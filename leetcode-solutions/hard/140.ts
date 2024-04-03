function wordBreak(s: string, wordDict: string[]): string[] {
  const m: Map<string, boolean> = new Map<string, boolean>();

  for (const word of wordDict) {
    m.set(word, true);
  }

  let ans: string[] = [];
  let sequence: string[] = [];
  const backtrace = (pos: number) => {
    if (pos === s.length) {
      ans.push(sequence.join(" "));
      return;
    }

    for (let i = pos; i < s.length; i++) {
      if (m.has(s.slice(pos, i + 1))) {
        sequence.push(s.slice(pos, i + 1));
        backtrace(i + 1);
        sequence.pop();
      }
    }
  };

  backtrace(0);
  return ans;
}

wordBreak("ab", ["a", "b"]);
