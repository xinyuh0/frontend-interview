// O(n^2) solution: simply traverse the array
function twoSum(nums: number[], target: number): number[] {
    const len = nums.length;
    let ans: number[] = [];

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                ans = [i, j];
            }
        }
    }

    return ans;
};


// O(n) solution: use hash map
function twoSum_(nums: number[], target: number): number[] {
    let numMap = new Map<number, number>();
    const len = nums.length;
    let ans: number[] = [];

    for (let i = 0; i < len; i++) {
        if (numMap.has(target - nums[i])) {
            // @ts-ignore
            ans = [numMap.get(target - nums[i]), i];
            break;
        }

        numMap.set(nums[i], i);
    }

    return ans;
}