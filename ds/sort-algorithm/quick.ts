import { check, generateRandomIntArray, swap } from './utils';

// Sort range [l, r)
const _quickSort = (a: number[], l: number, r: number) => {
    if (l >= r - 1) return;

    // Use number at index l as pivot
    const pivot = a[l];

    let i = l, j = r - 1;
    while (true) {
        while (a[j] > pivot && j > i) j--;

        if (i !== j) a[i] = a[j];
        else break;

        while (a[i] <= pivot && i < j) i++;

        if (i !== j) a[j] = a[i];
        else break;
    }

    a[i] = pivot;
    _quickSort(a, l, i);
    _quickSort(a, i + 1, r);
}

// Quick sort, in-place
export const quickSort = (a: number[]) => {
    _quickSort(a, 0, a.length);
}

const a = generateRandomIntArray(0, 100, 100);
console.log('Before sort:', a);

quickSort(a);
console.log('After sort:', a);

console.log('Is sorted:', check(a));