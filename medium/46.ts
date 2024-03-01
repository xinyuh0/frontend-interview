function permute(nums: number[]): number[][] {
    const len = nums.length;

    if (len === 1) {
        return [[nums[0]]];
    }

    let ans: number[][] = [];
    for (let i = 0; i < len; i++) {
        let removed = [...nums];
        removed.splice(i, 1);
        const subPermutations = permute(removed);

        for (let j = 0; j < subPermutations.length; j++) {
            ans.push([nums[i], ...subPermutations[j]]);
        }

    }

    return ans;
};

console.log(permute([1, 2, 3]))