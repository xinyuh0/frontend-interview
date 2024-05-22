function longestString(x: number, y: number, z: number): number {
  // AA: x, BB: y, AB: z
  // rule: no AAA or BBB
  // AA+AA, BB+BB, AA+AB, AB+BB
  // AA+BB, AB+AA, BB+AB, AB+AB
  // No matter there are how many ABs, we can use them all and regard them as one AB

  return 2 * (z + 2 * Math.min(x, y) + Math.min(Math.abs(x - y), 1));
}
