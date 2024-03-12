// function myPow(x: number, n: number): number {
//     if (n < 0) return myPow(1 / x, -n);

//     if (n === 0) return 1;

//     return x * myPow(x, n - 1);
// };

// function myPow(x: number, n: number): number {
//     if (n === 0) return 1;

//     if (n < 0) {
//         x = 1.0 / x;
//         n = -n;
//     }


//     let res = 1;
//     for (let i = 0; i < n; i++) {
//         res = res * x;
//     }
//     return res;
// }

function myPow(x: number, n: number): number {
    if (n === 0) return 1;

    if (n < 0) return myPow(1.0 / x, -n);

    if (n % 2 === 0) {
        const tmp = myPow(x, n / 2);
        return tmp * tmp;
    } else {
        const tmp = myPow(x, (n - 1) / 2);
        return tmp * tmp * x;
    }
}

