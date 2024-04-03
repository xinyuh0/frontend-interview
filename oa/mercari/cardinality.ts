const cardinatilySort = (nums: number[]) => {
  const countOne = (n: number) =>
    n
      .toString(2)
      .split("")
      .filter((c) => c === "1").length;

  const _nums = [...nums];

  _nums.sort((a, b) => {
    const na = countOne(a);
    const nb = countOne(b);

    if (na === nb) {
      return a - b;
    }

    return na - nb;
  });

  return _nums;
};

console.log(cardinatilySort([1, 2, 3, 4]));
