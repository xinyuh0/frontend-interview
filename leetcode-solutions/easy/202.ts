function isHappy(n: number): boolean {
  // compute sum of digit^2
  const compute = (x: number): number => {
    let sum = 0;
    while (x) {
      const digit = x % 10;
      sum += Math.pow(digit, 2);
      x = Math.floor(x / 10);
    }
    return sum;
  };

  let ans = false;
  const sequence: number[] = [n];

  // once a number has occurred in the previous sequence, there would be an endless loop
  while (true) {
    const prev = sequence[sequence.length - 1];
    const curr = compute(prev);

    // check if curr === 1
    if (curr === 1) {
      ans = true;
      break;
    }

    // check if there is endless loop
    if (sequence.indexOf(curr) !== -1) {
      break;
    }

    sequence.push(curr);
  }

  return ans;
}
