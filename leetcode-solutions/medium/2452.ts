function twoEditWords(queries: string[], dictionary: string[]): string[] {
  const isWithinTwoEdits = (a: string, b: string): boolean => {
    if (a.length !== b.length) return false;

    let cnt = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) cnt++;

      if (cnt > 2) return false;
    }

    return true;
  };

  let ans: string[] = [];
  for (let query of queries) {
    for (let word of dictionary) {
      if (isWithinTwoEdits(query, word)) {
        ans.push(query);
        // If not break, it will add the same word multiple times
        break;
      }
    }
  }

  return ans;
}

console.log(
  twoEditWords(["word", "note", "ants", "wood"], ["wood", "joke", "moat"])
);
