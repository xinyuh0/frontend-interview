import { check, generateRandomIntArray, swap } from './utils';

// Shell sort, in-place
export const shellSort = (a: number[]) => {

    let gap = Math.floor(a.length / 2);

    while (gap >= 1) {
        // Start from [0, gap)
        // Perform insertion sort starting from each position
        for (let start = 0; start < gap; start++) {

            // step = gap
            // Insertion sort
            for (let i = start + gap; i < a.length; i += gap) {
                for (let j = start; j < i; j += gap) {
                    if (a[i] < a[j]) {
                        const tmp = a[i];
                        a.splice(i, 1);
                        a.splice(j, 0, tmp);
                        break;
                    }
                }
            }

        }

        gap = Math.floor(gap / 2);
    }

}

const a = generateRandomIntArray(0, 100, 100);
console.log('Before sort:', a);

shellSort(a);
console.log('After sort:', a);

console.log('Is sorted:', check(a));