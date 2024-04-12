function _reverseWords(s: string): string {
  const reverse = (s: string): string => s.split("").reverse().join("");
  return s
    .split(" ")
    .map((word) => reverse(word))
    .join(" ");
}
