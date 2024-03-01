function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;

    function getM(index: number): number {
        return Math.floor(index / n);
    }

    function getN(index: number): number {
        return index % n;
    }

    // (m * n) elements in total, if we flatten the matrix into a array of length (m * n)
    // element of index i -> matrix[i//n][i%n]
    function search(l: number, r: number): boolean {
        if (l > r) return false;

        if (l === r) return matrix[getM(l)][getN(l)] === target;

        const mid = Math.floor((l + r) / 2);
        const val = matrix[getM(mid)][getN(mid)];

        if (val < target) {
            return search(mid + 1, r);
        }

        if (val > target) {
            return search(l, mid - 1);
        }

        // val === target
        return true;
    }

    return search(0, m * n - 1);
};

// console.log(searchMatrix([[1, 3]], 1));