// Return negative number if a < b, positive otherwise
type CompareFunction<T> = (a: T, b: T) => number;

// MinHeap
export class Heap<T> {
    // TODO: add capacity
    private heap: T[] = [];
    private compare: CompareFunction<T>;

    // Initialization
    constructor(compareFunction: CompareFunction<T> = (a, b) => (a as any) - (b as any), elements: T[] = []) {
        this.compare = compareFunction;

        if (elements.length > 0) {
            this.buildHeap(elements);
        }
    }

    private buildHeap(elements: T[]) {
        this.heap = [...elements];

        // Porcelate down from the last non-leaf node
        for (let i = Math.floor((this.size - 1) / 2); i >= 0; i--) {
            this.percolateDown(i);
        }
    }

    private _isValidIndex(index: number): boolean {
        return Number.isInteger(index) && index >= 0 && index < this.size;
    }

    private _swap(i: number, j: number) {
        if (this._isValidIndex(i) && this._isValidIndex(j)) {
            const tmp: T = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = tmp;
        }
    }

    // i: start index
    private percolateUp(i: number) {
        if (this._isValidIndex(i)) {
            while (i > 0) {
                const parentIdx = Math.floor((i - 1) / 2);

                if (this.compare(this.heap[i], this.heap[parentIdx]) < 0) {
                    this._swap(i, parentIdx);
                } else {
                    break;
                }

                i = parentIdx;
            }
        }
    }

    private percolateDown(i: number) {
        if (this._isValidIndex(i)) {
            // At least one child exists
            while (2 * i + 1 < this.size) {
                let childIdx = 2 * i + 1;
                // Find the smaller child
                if (childIdx + 1 < this.size && this.compare(this.heap[childIdx + 1], this.heap[childIdx]) < 0) {
                    childIdx = childIdx + 1;
                }

                if (this.compare(this.heap[childIdx], this.heap[i]) < 0) {
                    this._swap(childIdx, i);
                    i = childIdx;
                } else {
                    break;
                }
            }
        }
    }

    public extractMin(): T | null {
        if (this.isEmpty) return null;

        // Extract the minimum val
        const minElement: T = this.heap[0];
        this.heap.shift();

        if (!this.isEmpty) {
            // Move the last child to the head
            const lastElement: T = this.heap[this.size - 1];
            this.heap.pop();
            this.heap.unshift(lastElement);
            this.percolateDown(0);
        }

        return minElement;
    }

    public insert(element: T) {
        this.heap.push(element);
        this.percolateUp(this.size - 1);
    }

    get isEmpty(): boolean {
        return this.heap.length === 0;
    }

    get size(): number {
        return this.heap.length;
    }
}