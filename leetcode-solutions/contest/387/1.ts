function isSubstringPresent(s: string): boolean {
  const m: Map<string, boolean> = new Map<string, boolean>();

  for (let i = 0; i < s.length - 1; i++) {
    m.set(s.slice(i, i + 2), true);
  }

  const reversedS = s.split("").reverse().join("");
  for (let i = 0; i < s.length - 1; i++) {
    if (m.has(reversedS.slice(i, i + 2))) {
      return true;
    }
  }

  return false;
}
