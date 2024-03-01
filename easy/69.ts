function mySqrt(x: number): number {
    let ans = 0;
    for (let i = 0; i <= x; i++) {
        if (i * i <= x && (i + 1) * (i + 1) > x) {
            ans = i;
            break;
        }
    }

    return ans;
};