export class DisjointSet<T> {
    private parent: Map<T, T>;
    private rank: Map<T, number>;
    private _numOfSets: number;

    constructor() {
        this._numOfSets = 0;
        this.parent = new Map<T, T>();
        this.rank = new Map<T, number>();
    }

    get numberOfSets(): number {
        return this._numOfSets;
    }

    public makeSet(x: T) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.rank.set(x, 1);
            this._numOfSets++;
        }
    }

    public find(x: T): T | null {
        // x doesn't exist in the set
        if (!this.parent.has(x)) {
            return null;
        }

        // Path halving
        while (this.parent.get(x) !== x) {
            const parentOfX = this.parent.get(x);
            // @ts-ignore
            // It can be parent itself
            const grandparentOfX = this.parent.get(parentOfX);
            // @ts-ignore
            this.parent.set(x, grandparentOfX);
            // @ts-ignore
            x = parentOfX;

            // TODO: update the rank
        }

        return x;
    }

    public union(x: T, y: T) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        // x & y in the same set
        if (rootX === rootY) return;

        let newRoot = rootX, child = rootY;
        // @ts-ignore
        if (this.rank.get(rootX) < this.rank.get(rootY)) {
            newRoot = rootY;
            child = rootX;
        }
        // @ts-ignore
        this.parent.set(child, newRoot);
        // @ts-ignore
        if (this.rank.get(child) === this.rank.get(newRoot)) {
            // @ts-ignore
            this.rank.set(newRoot, this.rank.get(newRoot) + 1);
        }

        this._numOfSets--;
    }
}