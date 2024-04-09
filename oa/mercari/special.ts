// leetcode 3017
const shortestPath = (N: number, X: number, Y: number) => {
  if (X > Y) {
    let tmp = X;
    X = Y;
    Y = tmp;
  }

  // Brute Force: ❌
  // const distances: number[] = new Array(N + 1).fill(0);

  // // The answer should add up to (N-1)*N/2
  // for (let i = 1; i <= N; i++) {
  //   for (let j = i + 1; j <= N; j++) {
  //     let dis = Math.min(j - i, Math.abs(X - i) + Math.abs(Y - j) + 1);
  //     distances[dis]++;
  //   }
  // }

  // return distances.slice(1);

  let nums: number[] = new Array(N + 1).fill(0);

  // circle -> circle
  // circle -> non-circle
  // non-circle -> non-circle

  // For point that is not on the circle (All points except for those between X and Y)
  const numCircle: number = Math.max(0, Y - X - 1); // >= 0
  const numNonCircle: number = N - numCircle;

  // case 1: non-circle -> non-circle
  for (let i = 1; i < numNonCircle; i++) {
    nums[i] = numNonCircle - i;
  }

  if (numCircle > 0) {
    // case 2: circle -> circle
    // X -> Y counted once in case 1

    // O(N)
    nums[1]--;
    for (let i = 1; i <= Math.floor((numCircle + 1) / 2); i++) {
      nums[i] += numCircle + 2;
    }
    if (numCircle % 2 === 0) {
      nums[(numCircle + 2) / 2] += (numCircle + 2) / 2;
    }

    // case 3: circle -> non-circle
    const numLargerThanY = N - Y;
    const numSmallerThanX = X - 1;
    let diff = new Array(N + 1).fill(0);
    for (let i = 1; i <= Math.floor((numCircle + 1) / 2); i++) {
      // [i+1, i+numLargerThanY] -> +1 if i === 1 else +2
      if (i === 1) {
        diff[i + 1] += 2;
        diff[i + numLargerThanY + 1] -= 1;
        diff[i + numSmallerThanX + 1] -= 1;
      } else {
        diff[i + 1] += 4;
        diff[i + numLargerThanY + 1] -= 2;
        diff[i + numSmallerThanX + 1] -= 2;
      }
    }

    let accumulate: number[] = new Array(N + 1).fill(0);
    accumulate[0] = diff[0];
    for (let i = 1; i <= N; i++) {
      accumulate[i] = accumulate[i - 1] + diff[i];
    }

    nums = nums.map((_, i) => accumulate[i] + nums[i]);

    // O(N)
    if (numCircle % 2 === 0) {
      for (let j = 1; j <= numLargerThanY; j++) {
        const dis = (numCircle + 2) / 2 + j;
        nums[dis]++;
      }

      for (let j = 1; j <= numSmallerThanX; j++) {
        const dis = (numCircle + 2) / 2 + j;
        nums[dis]++;
      }
    }
  }

  return nums.slice(1).map((x) => 2 * x);
};

console.log(shortestPath(5, 2, 4));
