function addDigits(num: number): number {
  const _add = (n: number): number => {
    let ans = 0;
    while (n) {
      ans += n % 10;
      n = Math.floor(n / 10);
    }
    return ans;
  };

  const hasOneDigit = (n: number): boolean => Math.floor(n / 10) === 0;

  while (true) {
    if (hasOneDigit(num)) {
      return num;
    }

    num = _add(num);
  }
}
