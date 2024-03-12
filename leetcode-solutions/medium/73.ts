/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    // If a row i should be set to zero, set matrix[i][0] to zero. 
    // If a columb j should be set to zero, set matrix[0][j] to zero.
    // for matrix[0][0], use it to repersent the first row, for first column, use a flag
    let shouldFirstColumnBeZero = false;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                if (j === 0) {
                    matrix[i][0] = 0;
                    shouldFirstColumnBeZero = true;
                } else {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
    }

    // Process the first row & column in the last.
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // First row
    if (matrix[0][0] === 0) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }

    // First column
    if (shouldFirstColumnBeZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }

    // console.log(matrix);
};

// setZeroes([[1, 2, 3, 4], [5, 0, 7, 8], [0, 10, 11, 12], [13, 14, 15, 0]]);
