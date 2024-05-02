function makeStringsEqual(s: string, target: string): boolean {
  // s[i] -> s[i] | s[j]
  // s[j] -> s[i] ^ s[j]

  // 0...0 -> 0...0 (no difference)
  // 0...1 -> 1...1
  // 1...0 -> 1...1
  // 1...1 -> 1...0 or 0...1

  // Any pair of (0,1), (1,0) and (1,1) are interchangable
  // 0 can flip to 1, if there is any other 1 in the string
  // 1 can flip to 0, if there is any other 1 in the string

  return s.indexOf("1") >= 0 === target.indexOf("1") >= 0;
}

makeStringsEqual("11", "00");
