/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;
    // Start from matrix[i][i]
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        for (let j = i; j < n - 1 - i; j++) {
            const tmp = matrix[i][j];

            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = tmp;
            // console.log(matrix)
        }
    }
};


// rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);