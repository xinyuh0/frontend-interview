// 2024.1.16 #4
function twoSum(numbers: number[], target: number): number[] {
    let l = 0, r = numbers.length - 1;
    let found = false;

    while (!found && l < r) {
        if (numbers[l] + numbers[r] === target) {
            found = true;
        } else if (numbers[l] + numbers[r] > target) {
            r--;
        } else {
            l++;
        }
    }

    return [l + 1, r + 1];
};

twoSum([2, 7, 11, 15], 9)