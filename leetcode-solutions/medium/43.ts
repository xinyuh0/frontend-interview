function multiply(num1: string, num2: string): string {
  const L1 = num1.length;
  const L2 = num2.length;
  // Solution 1: multiple + add

  // Solution 2
  let ans: number[] = new Array(num1.length + num2.length).fill(0);

  for (let i = 0; i < L1; i++) {
    for (let j = 0; j < L2; j++) {
      ans[i + j] += Number(num1[L1 - i - 1]) * Number(num2[L2 - j - 1]);
    }
  }

  let s = "";
  // Handle carries
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] >= 10) {
      ans[i + 1] += Math.floor(ans[i] / 10);
      ans[i] = ans[i] % 10;
    }
    s = String(ans[i]) + s;
  }

  // Remove leading zeros
  return s.replace(/^0+/, "") || "0";
}

console.log(multiply("5", "12"));
