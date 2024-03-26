function countPrimes(n: number): number {
  const checkIsPrime = (x: number) => {
    if (x === 2) return true;

    for (let i = 2; i <= Math.ceil(Math.pow(x, 0.5)); i++) {
      if (x % i === 0) return false;
    }

    return true;
  };

  let ans = 0;
  const notPrime = new Array(n).fill(false);

  for (let i = 2; i < n; i++) {
    if (notPrime[i]) continue;

    if (checkIsPrime(i)) {
      ans++;
      for (let j = i * i; j < n + 1; j += i) {
        notPrime[j] = true;
      }
    }
  }

  return ans;
}
