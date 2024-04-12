/**
 Do not return anything, modify s in-place instead.
 */

function reverseString(s: string[]): void {
  // return s.reverse();
  const N = s.length;
  for (let i = 0; i < Math.floor(N / 2); i++) {
    [s[i], s[N - i - 1]] = [s[N - i - 1], s[i]];
  }
}
