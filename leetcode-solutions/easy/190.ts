function reverseBits(n: number): number {

    let pos = 0;
    let res = 0;
    while (n > 0) {
        let _ = n % 2;

        res += _ * Math.pow(2, 31 - pos);

        n = Math.floor(n / 2);
        pos++;
    }

    return res;
};
