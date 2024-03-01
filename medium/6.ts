function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }

    let res: string = '';
    const len = s.length;

    // 0th row
    for (let k = 0; k < len; k += 2 * numRows - 2) {
        res += s[k];
    }

    // 1 ~ (k-1)th row
    for (let i = 1; i < numRows - 1; i++) {
        for (let k = i; k < len; k += 2 * numRows - 2) {
            res += s[k];

            let tmp = k - i + 2 * numRows - 2;
            if (tmp - i < len) {
                res += s[tmp - i];
            }
        }
    }

    // kth row
    for (let k = numRows - 1; k < len; k += 2 * numRows - 2) {
        res += s[k];
    }


    return res;
};

// console.log(convert("ABCD", 3))