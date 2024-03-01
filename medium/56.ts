function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

    let start = intervals[0][0];
    let end = intervals[0][1];

    let res: number[][] = [];

    for (let i = 1; i < intervals.length; i++) {
        let s = intervals[i][0];
        let e = intervals[i][1];

        if (s > end) {
            res.push([start, end]);
            start = s;
            end = e;
        } else if (s <= end) {
            if (e > end) {
                end = e;
            }
        }
    }

    res.push([start, end]);

    return res;
}

// console.log(merge([[4, 5], [2, 4], [4, 6], [3, 4], [0, 0], [1, 1], [3, 5], [2, 2]]))