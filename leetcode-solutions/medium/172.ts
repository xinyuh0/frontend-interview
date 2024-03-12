// 2024.1.16 #2
function trailingZeroes(n: number): number {
    if (n < 5) return 0;

    function computeNumOf2And5(x: number) {
        let n2 = 0, n5 = 0;

        let x2 = x, x5 = x;
        while (x2 % 2 === 0) {
            n2++;
            x2 /= 2;
        }

        while (x5 % 5 === 0) {
            n5++;
            x5 /= 5;
        }

        numOf2 += n2;
        numOf5 += n5;
    }

    // 10 = 1*10 = 2*5
    // <-> find the total number of 2 & 5
    let numOf2 = 0, numOf5 = 0;
    for (let i = 2; i <= n; i++) {
        computeNumOf2And5(i);
    }

    return Math.min(numOf2, numOf5);
};