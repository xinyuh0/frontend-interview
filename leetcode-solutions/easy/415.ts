function addStrings(num1: string, num2: string): string {
  const BASE_CODE = "0".charCodeAt(0);

  let res = "";
  let carry = 0;
  for (let i = 0; i < num1.length || i < num2.length; i++) {
    const n1 =
      i < num1.length ? num1.charCodeAt(num1.length - i - 1) - BASE_CODE : 0;
    const n2 =
      i < num2.length ? num2.charCodeAt(num2.length - i - 1) - BASE_CODE : 0;

    let sum = n1 + n2 + carry;
    carry = sum >= 10 ? 1 : 0;

    res = (sum % 10).toString() + res;
  }

  return carry ? "1" + res : res;
}
