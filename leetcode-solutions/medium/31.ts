// 2024.3.25 17:28 ~ 18:08
// 40 min
function nextPermutation(nums: number[]): void {
  const N = nums.length;

  const swap = (i: number, j: number) => {
    tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };

  const isLastPermutation = (len: number): boolean => {
    // If last `len` elements are sorted from large to small, it is the last permutation
    if (nums[N - len + 1] > nums[N - len]) {
      return false;
    }
    return true;
  };

  // Suppose we have to change at least last `len` of nums
  let len = 2;
  // Compute `len`
  while (len <= nums.length && isLastPermutation(len)) {
    len++;
  }

  // exchange (N-len)th element with first element larger than it, sort the remaining from small to large
  let tmp = nums[N - len];
  for (let i = N - 1; i > N - len; i--) {
    if (nums[i] > tmp) {
      // swap nums[i] with tmp
      swap(i, N - len);
      break;
    }
  }

  // reverse from (N-len+1) to (N-1)
  for (let i = N - 1; i > Math.floor((2 * N - len) / 2); i--) {
    swap(i, 2 * N - len - i);
  }

  //   console.log(nums);
}

nextPermutation([1, 4, 3, 2]);
