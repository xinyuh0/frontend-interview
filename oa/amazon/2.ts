const reduceGifts = (
  prices: number[],
  k: number,
  threshold: number
): number => {
  let ans = 0;

  prices.sort((a, b) => a - b);

  if (prices.length <= k) return ans;

  // Step 1: find combinations to be removed
  const combination: number[] = [];
  let price: number = 0;

  const combinationsToBeRemoved: number[][] = [];
  let indexInCombinationsToBeRemoved: number[] = [];

  const backtrace = (index: number) => {
    if (combination.length === k) {
      if (price > threshold) {
        combinationsToBeRemoved.push([...combination]);
        indexInCombinationsToBeRemoved.push(...combination);
      }

      return;
    }

    if (index >= prices.length) {
      return;
    }

    // put current item into combination
    combination.push(index);
    price += prices[index];
    backtrace(index + 1);
    combination.pop();
    price -= prices[index];

    // skip it
    backtrace(index + 1);
  };

  backtrace(0);

  // Step 2: find minimum number of items to be removed
  // can be inferred from binary representations
  indexInCombinationsToBeRemoved = [...new Set(indexInCombinationsToBeRemoved)];
  indexInCombinationsToBeRemoved.sort((a, b) => a - b);
  let binary = combinationsToBeRemoved.map((combination) =>
    combination.reduce((prev, curr) => (prev += Math.pow(2, curr)), 0)
  );

  while (binary.length > 0) {
    const indexToBeRemoved = indexInCombinationsToBeRemoved.pop() as number;
    console.log(
      `remove item[${indexToBeRemoved}], price: ${prices[indexToBeRemoved]}`
    );
    ans++;

    binary = binary.filter((val) => !((val >> indexToBeRemoved) & 1));
  }

  return ans;
};

console.log(reduceGifts([3, 2, 1, 4, 6, 5], 3, 6));
