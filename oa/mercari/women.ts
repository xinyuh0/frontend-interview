const getMinOperations = (arr: number[]): number => {
  const N = arr.length;
  // 1 operation: flip any bit of an element
  // Compute the minimum number of operations -> all elements are equal
  // Assume the largest number is 2^31 - 1

  const binary = arr.map((val) => val.toString(2).padStart(32, "0"));
  let ans = 0;
  for (let pos = 32; pos > 0; pos--) {
    const bits = binary.map((bin) => bin[pos - 1]);
    const numOfOnes = bits.filter((b) => b === "1").length;
    const numOfZeros = N - numOfOnes;

    ans += Math.min(numOfOnes, numOfZeros);
  }

  //   console.log(binary);

  return ans;
};

getMinOperations([1, 2]);
