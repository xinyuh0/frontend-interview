class LRUCache {
    private n: number = 0;
    private capacity: number = 0;
    private cache: number[] = [];
    private m: Map<number, number> = new Map<number, number>();

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.m.get(key) !== undefined) {
            const i = this.cache.findIndex((val) => val === key);
            this.cache.splice(i, 1);
            this.cache.unshift(key);
            // @ts-ignore
            return this.m.get(key);
        }

        return -1;
    }

    put(key: number, value: number): void {
        if (this.n == this.capacity) {
            if (this.m.get(key)) {
                const i = this.cache.findIndex((val) => val === key);
                this.cache.splice(i, 1);
                this.cache.unshift(key);
            } else {
                const keyToBeRemoved = this.cache.pop();
                this.cache.unshift(key);
                // @ts-ignore
                this.m.delete(keyToBeRemoved);
            }
            this.m.set(key, value);
        } else {
            if (this.m.get(key)) {
                const i = this.cache.findIndex((val) => val === key);
                this.cache.splice(i, 1);
                this.cache.unshift(key);
            } else {
                this.cache.unshift(key);
                this.n++;
            }
            this.m.set(key, value);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */