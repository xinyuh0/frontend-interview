function numIdenticalPairs(nums: number[]): number {
    let m: Map<number, number> = new Map();

    let res: number = 0;
    for (const n of nums) {
        let numOfN = m.get(n);

        if (numOfN !== undefined) {
            res += numOfN;
            m.set(n, numOfN + 1);
        } else {
            m.set(n, 1);
        }
    }

    return res;
};


console.log(numIdenticalPairs([1, 1, 1, 1]));