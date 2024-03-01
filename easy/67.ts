function addBinary(a: string, b: string): string {

    let arrayA = a.split('').reverse().map(s => Number(s));
    let arrayB = b.split('').reverse().map(s => Number(s));

    let carry = 0;
    let res: number[] = [];
    for (let i = 0; i < Math.max(arrayA.length, arrayB.length); i++) {
        if (i >= arrayA.length) {
            res[i] = (arrayB[i] + carry) % 2;
            carry = (arrayB[i] + carry) >= 2 ? 1 : 0;
        } else if (i >= arrayB.length) {
            res[i] = (arrayA[i] + carry) % 2;
            carry = (arrayA[i] + carry) >= 2 ? 1 : 0;
        } else {
            res[i] = (arrayA[i] + arrayB[i] + carry) % 2;
            carry = (arrayA[i] + arrayB[i] + carry) >= 2 ? 1 : 0;
        }
    }

    if (carry === 1) {
        res.push(1);
    }

    return res.reverse().join('');
};
