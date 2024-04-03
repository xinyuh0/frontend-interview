const getSmallestPalindrome = (s: string) => {
  let l = 0;
  let r = s.length - 1;

  let ans = "";
  while (l < r) {
    const leftC = s[l];
    const rightC = s[r];

    if (leftC === rightC) {
      if (leftC === "?" && rightC === "?") {
        ans += "a";
      } else {
        ans += leftC;
      }
    } else {
      if (leftC === "?") {
        ans += rightC;
      } else if (rightC === "?") {
        ans += leftC;
      } else {
        return "-1";
      }
    }

    l++;
    r--;
  }
  const reversed = ans.split("").reverse().join("");

  return s.length % 2 !== 0 ? ans + s[l] + reversed : ans + reversed;
};

console.log(getSmallestPalindrome("a?rt???"));
