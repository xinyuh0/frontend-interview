function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  if (strs.length === 1) return strs[0];

  let i = 0;
  let ans = "";

  while (true) {
    let flag = true;
    const c = strs[0][i];
    for (let k = 1; k < strs.length; k++) {
      const str = strs[k];

      if (i >= str.length) {
        flag = false;
        break;
      }

      if (str[i] !== c) {
        flag = false;
        break;
      }
    }

    if (!flag) {
      break;
    }

    ans += c;
    i++;
  }

  return ans;
}

longestCommonPrefix(["flower", "flow", "flight"]);
