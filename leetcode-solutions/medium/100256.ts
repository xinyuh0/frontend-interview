// Because n is between [1, 100]
// We can use an array to cache the results
function isPrime(n: number): boolean {
  // Can be improved
  if (n === 1) return false;

  if (n === 2 || n === 3) return true;

  for (let i = Math.floor(Math.pow(n, 0.5)); i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function maximumPrimeDifference(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  while (!isPrime(nums[l]) && l < r) l++;
  while (!isPrime(nums[r]) && l < r) r--;

  return r - l;
}

console.log(maximumPrimeDifference([4, 2, 9, 5, 3]));
