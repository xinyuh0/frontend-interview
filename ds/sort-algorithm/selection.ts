import { check, generateRandomIntArray, swap } from './utils';

// Selection sort, in-place
export const selectionSort = (a: number[]) => {

    for (let i = 0; i < a.length - 1; i++) {
        let min: number = a[i];
        let minIdx: number = i;

        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < min) {
                min = a[j];
                minIdx = j;
            }
        }

        if (minIdx !== i) {
            swap(a, minIdx, i);
        }
    }

}

const a = generateRandomIntArray(0, 100, 100);
console.log('Before sort:', a);

selectionSort(a);
console.log('After sort:', a);

console.log('Is sorted:', check(a));