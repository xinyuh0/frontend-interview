// 2024.1.29 #2
function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    let diff: number[] = [];

    for (let i = 0; i < gas.length; i++) {
        diff.push(gas[i] - cost[i]);
    }

    let testedNum: number = 0;
    let i = 0
    while (testedNum < n) {
        // Test whether pos i can be the start point
        if (diff[i] >= 0) {
            let gasVol = 0, canComplete = true;
            for (let j = 0; j < n; j++) {
                gasVol += diff[(i + j) % n];

                if (gasVol < 0) {
                    canComplete = false;
                    i = (i + j + 1) % n;
                    testedNum += (j + 1);
                    break;
                }
            }

            if (canComplete) {
                return i;
            }
        } else {
            i++;
            testedNum++;
        }
    }

    return -1;
};

console.log(canCompleteCircuit([4, 5, 2, 6, 5, 3], [3, 2, 7, 3, 2, 9]))