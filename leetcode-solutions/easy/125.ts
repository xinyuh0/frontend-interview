function isPalindrome(s: string): boolean {
  s = s
    .toLocaleLowerCase()
    .split("")
    .filter((c) => {
      const code = c.charCodeAt(0);
      return (
        (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) ||
        (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0))
      );
    })
    .join("");

  console.log(s);

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}

isPalindrome("0P");
