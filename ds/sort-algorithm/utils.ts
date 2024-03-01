// Generate data to be sorted
export const generateRandomIntArray = (min: number, max: number, length: number): number[] => {
    const res: number[] = []

    for (let i = 0; i < length; i++) {
        res.push(
            Math.floor(Math.random() * (max - min)) + min
        )
    }

    return res
}

// Check whether the array is sorted
export const check = (a: number[]): boolean => {
    let res: boolean = true;

    for (let i = 1; i < a.length; i++) {
        if (a[i] < a[i - 1]) {
            res = false;
            break;
        }
    }

    return res;
}

// Swap a[idx] with a[idx2], in-place
export const swap = (a: number[], idx1: number, idx2: number) => {
    const tmp = a[idx1];
    a[idx1] = a[idx2];
    a[idx2] = tmp;
}
