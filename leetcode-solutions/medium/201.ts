// 2024.1.13 #4
// For each bit, judge whether there would be a zero.
function rangeBitwiseAnd(left: number, right: number): number {
    const n = Math.floor(Math.log2(right)) + 1;

    const diff = right - left;

    let res = 0;
    for (let i = 0; i < n; i++) {
        const bit1 = (left >> i) & 1;
        const bit2 = (right >> i) & 1;

        if (bit1 === 0 || bit2 === 0) {
            continue;
        }

        // bit1 = bit2 = 1
        if (diff < Math.pow(2, i)) {
            res += Math.pow(2, i);
        }
    }

    return res;
};
