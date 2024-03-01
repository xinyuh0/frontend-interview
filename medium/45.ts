// DP Solution
// function jump(nums: number[]): number {

//     // The minimum number of jump to position i
//     let dp = new Array(nums.length).fill(-1);
//     dp[0] = 0;

//     for (let i = 1; i < nums.length; i++) {
//         let min = Number.MAX_SAFE_INTEGER;
//         for (let j = 0; j < i; j++) {
//             if (dp[j] !== -1 && j + nums[j] >= i) {
//                 min = Math.min(min, dp[j] + 1);
//             }
//         }
//         dp[i] = min;
//     }

//     return dp[nums.length - 1];
// };


// Greedy Solution
function jump(nums: number[]): number {
    if (nums.length === 1) return 0;

    // Current step
    let step = 1;
    // The furthest position can be reached at current step
    let far = nums[0];
    let nextFar = 0;
    for (let i = 1; i < nums.length; i++) {
        if (i > far) {
            step++;
            far = nextFar;
        }
        nextFar = Math.max(nextFar, i + nums[i]);
    }

    return step;
}

console.log(jump([2, 3, 1, 1, 4]));
