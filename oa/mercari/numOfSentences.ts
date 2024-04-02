const countSentences = (words: string[], sentences: string[]) => {
  // use sorted letters as key
  // anagrams have the same key
  const getKey = (s: string) => {
    const letters = s.split("");
    letters.sort();
    return letters.join("");
  };

  // map hash of words to frequency
  const m: Map<string, number> = new Map<string, number>();

  for (const word of words) {
    const key = getKey(word);

    if (m.has(key)) {
      m.set(key, (m.get(key) as number) + 1);
    } else {
      m.set(key, 1);
    }
  }

  let ans: number[] = [];
  for (const sentence of sentences) {
    const words = sentence.split(" ");
    let cnt = 1;
    for (const word of words) {
      const key = getKey(word);

      if (m.has(key)) {
        const freq = m.get(key) as number;
        cnt *= freq;
      }
    }
    ans.push(cnt);
  }

  return ans;
};

console.log(
  countSentences(["listen", "silent", "it", "is"], ["listen it is silent"])
);
