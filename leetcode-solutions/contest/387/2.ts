function countSubstrings(s: string, c: string): number {
  const numOfC: number = s.split("").filter((l) => l === c).length;

  return numOfC + (numOfC * (numOfC - 1)) / 2;
}
