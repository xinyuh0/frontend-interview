import { check, generateRandomIntArray, swap } from './utils';

// Sort range [l, r)
const _mergeSort = (a: number[], l: number, r: number) => {
    if (l >= r - 1) return;

    const mid = Math.floor((l + r) / 2);
    _mergeSort(a, l, mid);
    _mergeSort(a, mid, r);

    // merge
    const tmp: number[] = [];
    let i = l, j = mid;
    while (i < mid || j < r) {
        if (j >= r) {
            tmp.push(a[i]);
            i++;
            continue;
        }

        if (i >= mid) {
            tmp.push(a[j]);
            j++;
            continue;
        }

        if (a[i] < a[j]) {
            tmp.push(a[i]);
            i++;
        } else {
            tmp.push(a[j]);
            j++;
        }
    }

    // copy back
    a.splice(l, r - l, ...tmp);
}

// Merge sort, in-place
export const mergeSort = (a: number[]) => {
    _mergeSort(a, 0, a.length);
}

const a = generateRandomIntArray(0, 100, 100);
console.log('Before sort:', a);

mergeSort(a);
console.log('After sort:', a);

console.log('Is sorted:', check(a));