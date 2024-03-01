import { Heap } from './heap';
import { generateRandomIntArray } from '../sort-algorithm/utils';

const array = generateRandomIntArray(0, 100, 10);
const newHeap = new Heap((a: number, b: number) => a - b, array);

console.log(array);

for (let i = 0; i < 10; i++) {
    console.log(newHeap.extractMin());
}

console.log("----------------------------------------------------------------");

const toBeInserted = generateRandomIntArray(0, 100, 10);
console.log(toBeInserted);

for (let i = 0; i < 10; i++) {
    newHeap.insert(toBeInserted[i]);
}

for (let i = 0; i < 10; i++) {
    console.log(newHeap.extractMin());
}