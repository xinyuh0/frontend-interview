function isPowerOfTwo(n: number): boolean {
  if (n === 0) return false;

  while (n) {
    if (n !== 1 && n % 2 !== 0) return false;

    n = Math.floor(n / 2);
  }

  return true;
}
