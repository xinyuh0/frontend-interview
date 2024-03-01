function hammingWeight(n: number): number {
    let res = 0;

    while (n > 0) {
        if (n % 2 === 1) {
            res++;
        }

        n = Math.floor(n / 2);
    }

    return res;
};