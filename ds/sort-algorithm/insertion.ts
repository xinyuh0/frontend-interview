import { check, generateRandomIntArray, swap } from './utils';

// Insertion sort, in-place
export const insertionSort = (a: number[]) => {

    for (let i = 1; i < a.length; i++) {
        for (let j = 0; j < i; j++) {
            // a[i] should be inserted in front of a[j]
            if (a[i] < a[j]) {
                const tmp = a[i];
                a.splice(i, 1);
                a.splice(j, 0, tmp);
                break;
            }
        }
    }

}

const a = generateRandomIntArray(0, 100, 100);
console.log('Before sort:', a);

insertionSort(a);
console.log('After sort:', a);

console.log('Is sorted:', check(a));