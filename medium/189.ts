/**
 Do not return anything, modify nums in-place instead.
 */
function rotate_(nums: number[], k: number): void {
    k = k % nums.length;

    let tmp = nums.splice(nums.length - k, k);
    nums.unshift(...tmp);
};