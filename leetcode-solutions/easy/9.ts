// 2024.3.25 17:20 ~ 17:22
// 2 min
function isPalindrome(x: number): boolean {
  const str = x.toString();

  let l = 0;
  let r = str.length - 1;
  while (l <= r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

isPalindrome(121);
