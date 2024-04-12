function reverseWords(s: string): string {
  // return s
  // .split(" ")
  // .filter((item) => item !== "")
  // .reverse()
  // .join(" ");
  let res = "";
  let word = "",
    pos = 0;
  while (pos < s.length) {
    while (s[pos] === " ") {
      pos++;
    }

    while (s[pos] !== " " && pos < s.length) {
      word += s[pos];
      pos++;
    }

    if (word === "") continue;

    res = res === "" ? word : word + " " + res;
    word = "";
  }

  return res;
}

// console.log(reverseWords("the sky is blue"));
