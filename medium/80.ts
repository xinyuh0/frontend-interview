function removeDuplicates(nums: number[]): number {
    // Initialization
    let index = 1;
    let n = 1;
    let value: number = nums[0];

    while (index < nums.length) {
        if (nums[index] === value) {
            n++;
        } else {
            value = nums[index];
            n = 1;
        }

        if (n > 2) {
            nums.splice(index, 1);
            n = 2;
        } else {
            index++;
        }
    }


    return nums.length;
};

