/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    function dfs(x: number, y: number) {
        // Out of bounds.
        if (x < 0 || x >= m || y < 0 || y >= n) return;

        if (board[x][y] === "X") return;

        // Has beem searched before.
        if (board[x][y] === 'O' && shouldFlip[x][y] === false) return;

        shouldFlip[x][y] = false;

        const directions: number[][] = [
            [-1, 0], // up
            [+1, 0], // down
            [0, -1], // left
            [0, +1], // right
        ];

        for (const direction of directions) {
            dfs(x + direction[0], y + direction[1]);
        }
    }


    let shouldFlip: boolean[][] = [];
    const m = board.length, n = board[0].length;
    for (let i = 0; i < m; i++) {
        const row = new Array(n).fill(true);
        shouldFlip.push(row);
    }

    // Find all the 'O' on the border. Search from these 'O's, find all the 'O's that should not be flipped.
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            dfs(i, 0);
        }

        if (board[i][n - 1] === 'O') {
            dfs(i, n - 1);
        }
    }

    for (let j = 1; j < n - 1; j++) {
        if (board[0][j] === 'O') {
            dfs(0, j);
        }

        if (board[m - 1][j] === 'O') {
            dfs(m - 1, j);
        }
    }

    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (board[i][j] === 'O' && shouldFlip[i][j]) {
                board[i][j] = 'X';
            }
        }
    }
}