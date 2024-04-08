// Topological sort
function alienOrder(words: string[]): string {
  const characters: string[] = [];
  const characterToIdxMap = new Map<string, number>();
  const adjacentList: number[][] = new Array();
  const indegree: number[] = [];

  const createEntry = (character: string) => {
    if (characterToIdxMap.has(character)) return;

    const idx = characters.length;
    characters.push(character);
    characterToIdxMap.set(character, idx);
    adjacentList.push([]);
    indegree.push(0);
  };

  // Construct the adjacent list
  for (let i = 0; i < words.length; i++) {
    for (const c of words[i]) {
      createEntry(c);
    }

    if (i === 0) continue;

    const last = words[i - 1],
      curr = words[i];

    // find first different character
    let j = 0;
    while (last[j] === curr[j] && j < last.length && j < curr.length) {
      j++;
    }

    if (j === curr.length && last.length > curr.length) {
      //   console.log("invalid");
      return "";
    }

    if (j < last.length) {
      const smaller = last[j],
        larger = curr[j];
      // @ts-ignore
      const smallerIdx = characterToIdxMap.get(smaller);
      // @ts-ignore
      const largerIdx = characterToIdxMap.get(larger);

      // Add to adjacent list and indegree
      // @ts-ignore
      adjacentList[smallerIdx].push(largerIdx);
      // @ts-ignore
      indegree[largerIdx]++;
    }
  }

  // Solve
  let res = "";
  const flag: boolean[] = new Array<boolean>(characters.length).fill(false);
  for (let k = 0; k < characters.length; k++) {
    for (let i = 0; i < characters.length; i++) {
      if (!flag[i] && indegree[i] === 0) {
        res += characters[i];
        flag[i] = true;

        for (const j of adjacentList[i]) {
          indegree[j]--;
        }
      }
    }
  }

  return characters.length === res.length ? res : "";
}

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
