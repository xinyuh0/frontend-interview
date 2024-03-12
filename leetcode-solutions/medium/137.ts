// For each bit, the sum is 3m + n
function singleNumber(nums: number[]): number {
    let ans = 0;

    for (let i = 0; i < 32; i++) {
        let sum = 0;

        for (let j = 0; j < nums.length; j++) {
            sum += (nums[j] >> i) & 1;
        }

        ans |= (sum % 3) << i;
    }

    return ans;
};
