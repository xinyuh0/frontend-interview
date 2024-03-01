function plusOne(digits: number[]): number[] {
    const len = digits.length;
    let ans = [...digits];

    ans[len - 1]++;
    for (let i = len - 1; i > 0; i--) {
        if (ans[i] === 10) {
            ans[i] = 0;
            ans[i - 1]++;
        }
    }

    if (ans[0] === 10) {
        ans[0] = 0;
        ans.unshift(1);
    }

    return ans;
};