function groupAnagrams(strs: string[]): string[][] {
  const m: Map<string, string[]> = new Map<string, string[]>();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!m.has(key)) {
      m.set(key, []);
    }

    (m.get(key) as string[]).push(str);
  }

  return Array.from(m.values());
}
