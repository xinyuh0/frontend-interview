function trap_(height: number[]): number {
    // Judge whether water at this position can be kept. (x >=1 && x <= height.length-2) is garanteed.
    function judge(x: number, y: number) {
        let l = x - 1, r = x + 1;

        let lFound = false;
        while (l >= 0) {
            if (height[l] >= y) {
                lFound = true;
                break;
            }
            l--;
        }

        if (!lFound) return false;

        let rFound = false;
        while (r <= height.length - 1) {
            if (height[r] >= y) {
                rFound = true;
                break;
            }
            r++;
        }

        if (!rFound) return false;

        return true;
    }

    // Use a pointer. 1. Move left by one step, 2. Move up until the water can not be kept.
    let x = 1, y = height[x] + 1;
    let n = 0;
    while (x < height.length - 1) {
        while (judge(x, y)) {
            y++;
            n++;
        }
        x++;
        y = height[x] + 1;
    }

    return n;
};

// For each x, find the largest height at its both sides (lMax, rMax).
// The water can be kept at this position is Math.min(lMax, rMax) - height[i].
function trap(height: number[]): number {
    // lMax[i], largest height in the range [0, i-1], traversal from left to right.
    let lMax = new Array(height.length).fill(0);
    // rMax[i], largest height in the range [i+1, height.length-1], traversal from right to left.
    let rMax = new Array(height.length).fill(0);

    for (let i = 1; i <= height.length - 2; i++) {
        lMax[i] = Math.max(lMax[i - 1], height[i - 1]);
    }

    let n = 0;
    // Because we have already obtained lMax, in this turn we can get water capacity.
    for (let i = height.length - 2; i >= 1; i--) {
        rMax[i] = Math.max(rMax[i + 1], height[i + 1]);
        if (lMax[i] > height[i] && rMax[i] > height[i]) {
            n += (Math.min(lMax[i], rMax[i]) - height[i]);
        }
    }

    // console.log(lMax, rMax);
    return n;
}

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));