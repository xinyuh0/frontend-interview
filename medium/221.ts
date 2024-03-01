function maximalSquare(matrix: string[][]): number {
    let sum: number[][] = [];

    for (let i = 0; i < matrix.length; i++) {
        const row = new Array(matrix[0].length).fill(0);
        sum.push(row);
    }

    sum[0][0] = matrix[0][0] === '1' ? 1 : 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === 0 && j !== 0) {
                sum[i][j] = sum[i][j - 1] + (matrix[i][j] === '1' ? 1 : 0);
            } else if (i !== 0 && j === 0) {
                sum[i][j] = sum[i - 1][j] + (matrix[i][j] === '1' ? 1 : 0);
            } else if (i !== 0 && j !== 0) {
                sum[i][j] = sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + (matrix[i][j] === '1' ? 1 : 0);
            }
        }
    }

    function isSquare(i: number, j: number, width: number): boolean {
        let tmp = sum[i][j];

        if (i + 1 - width !== 0) {
            tmp -= sum[i - width][j];
        }

        if (j + 1 - width !== 0) {
            tmp -= sum[i][j - width];
        }

        if (i + 1 - width !== 0 && j + 1 - width !== 0) {
            tmp += sum[i - width][j - width];
        }

        return tmp === width * width;
    }

    // Find width of square (right bottom point: (i, j))
    function findSquareWidth(i: number, j: number): number {
        if (matrix[i][j] === '0') return 0;

        let width = 2;
        while (i + 1 - width >= 0 && j + 1 - width >= 0) {
            if (isSquare(i, j, width)) {
                width++;
            } else {
                break;
            }
        }

        return width - 1;
    }

    if (sum[matrix.length - 1][matrix[0].length - 1] === 0) return 0;

    let maxWidth = 1;
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            maxWidth = Math.max(maxWidth, findSquareWidth(i, j));
        }
    }

    return maxWidth * maxWidth;
}

console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]))