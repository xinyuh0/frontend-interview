// 2024.3.25 19:20 ~ 19:31
// 11 min
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const c = tokens[i];

    if (c === "+" || c === "-" || c === "*" || c === "/") {
      const b = stack.pop() as number;
      const a = stack.pop() as number;

      let tmp = 0;
      switch (c) {
        case "+":
          tmp = a + b;
          break;
        case "-":
          tmp = a - b;
          break;
        case "*":
          tmp = a * b;
          break;
        case "/":
          tmp = a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b);
          break;
        default:
          break;
      }
      //   console.log(a, c, b, tmp);
      stack.push(tmp);
    } else {
      stack.push(Number(c));
    }
  }

  return stack[0];
}

// evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
