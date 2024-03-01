function candy(ratings: number[]): number {
    if (ratings.length === 1) return 1;

    if (ratings.length === 2) return ratings[0] === ratings[1] ? 2 : 3;


    // for child with the minimum rating -> 1
    // minimum means no larger than neighbors
    let mins: number[] = [];
    for (let i = 0; i < ratings.length; i++) {
        if (i === 0) {
            if (ratings[i + 1] >= ratings[i]) { mins.push(i); }
        } else if (i === ratings.length - 1) {
            if (ratings[i - 1] >= ratings[i]) { mins.push(i); }
        } else {
            if (ratings[i + 1] >= ratings[i] && ratings[i - 1] >= ratings[i]) { mins.push(i); }
        }
    }

    let res = mins.length;
    for (let m = 0; m < mins.length - 1; m++) {
        let l = mins[m], r = mins[m + 1];

        if (r - l === 1) { continue; }

        l = l + 1, r = r - 1;
        let heightL = 0, heightR = 0;

        while (ratings[l] >= ratings[l - 1] && l !== mins[m + 1]) {
            heightL++;
            l++;
        }

        while (ratings[r] >= ratings[r + 1] && r !== mins[m]) {
            heightR++;
            r--;
        }

        // for left part: (1+1) + (1+2) + (1+heightL-1) (heightL > 1)
        if (heightL > 1) {
            res += ((heightL - 1) + (heightL - 1) * heightL / 2);
        }

        // for right part:
        if (heightR > 1) {
            res += ((heightR - 1) + (heightR - 1) * heightR / 2);
        }

        const hasOverlap = (mins[m + 1] - mins[m]) < (heightL + heightR);
        if (!hasOverlap) {
            // for the peak, 1 + max(heightL, heightR)
            res += (1 + Math.max(heightL, heightR));
        }
    }

    if (mins[0] > 0) {
        const h = mins[0];
        // (1+1) + (1+2) + ... + (1+h)
        res += (h + 1) * h / 2 + h;
    }

    if (mins[mins.length - 1] < ratings.length - 1) {
        const h = ratings.length - 1 - mins[mins.length - 1];
        res += (h + 1) * h / 2 + h;
    }

    return res;
};

// console.log(candy([29, 51, 87, 87, 72, 12]));