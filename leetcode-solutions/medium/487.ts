function findMaxConsecutiveOnes(nums: number[]): number {
  let a: number[][] = new Array();
  for (let i = 0; i < nums.length; i++) {
    a.push([0, 0]);
  }

  let res = 1;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      a[i][0] = nums[0];
      continue;
    }

    a[i][0] = nums[i] === 1 ? a[i - 1][0] + 1 : 0;
    res = Math.max(a[i - 1][0] + 1, res);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      continue;
    }

    let len = 1;
    // check left
    len += i - 1 >= 0 && nums[i - 1] === 1 ? a[i - 1][0] : 0;

    // check right
    let j = i + 1;
    while (j < nums.length && nums[j] === 1) {
      j++;
      len++;
    }

    res = Math.max(len, res);
  }

  return res;
}

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]));
