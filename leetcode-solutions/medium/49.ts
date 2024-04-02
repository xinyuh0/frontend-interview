function groupAnagrams(strs: string[]): string[][] {
  const m: Map<string, string[]> = new Map<string, string[]>();

  for (const str of strs) {
    const letters = str.split("");
    letters.sort();

    const key = letters.join("");
    if (m.has(key)) {
      m.set(key, [...(m.get(key) as string[]), str]);
    } else {
      m.set(key, [str]);
    }
  }

  return Array.from(m.values());
}
