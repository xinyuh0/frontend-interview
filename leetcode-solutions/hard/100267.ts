function gcd(a: number, b: number) {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a: number, b: number) {
  return Math.abs(a * b) / gcd(a, b);
}

function lcmArray(numbers: number[]) {
  return numbers.reduce(
    (currentLcm: number, number: number) => lcm(currentLcm, number),
    1
  );
}

function findKthSmallest(coins: number[], k: number): number {
  let lcm = lcmArray(coins);
  let tmp: number[] = [];

  for (let coin of coins) {
    let i = 1;
    while (coin * i < lcm) {
      tmp.push(coin * i);
      i++;
    }
  }
  tmp.push(lcm);
  // Remove duplicates
  tmp = Array.from(new Set(tmp));
  tmp.sort((a, b) => a - b);

  console.log(tmp, lcm);

  // Because k starts from 1, need -1
  return tmp[(k - 1) % tmp.length] + lcm * Math.floor((k - 1) / tmp.length);
}

console.log(
  findKthSmallest(
    [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
    7
  )
);
