import { check, generateRandomIntArray, swap } from './utils';

// Bubble sort, in-place
export const bubbleSort = (a: number[]) => {

    for (let i = a.length - 1; i > 1; i--) {
        for (let j = 0; j < i; j++) {
            if (a[j] > a[j + 1]) {
                // Swap
                swap(a, j, j + 1);
            }
        }
    }
}

const a = generateRandomIntArray(0, 100, 100);
console.log('Before sort:', a);

bubbleSort(a);
console.log('After sort:', a);

console.log('Is sorted:', check(a));