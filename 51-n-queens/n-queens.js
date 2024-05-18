/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let queens = Array(n).fill().map(() => Array(n).fill("."));
    let cols = new Set();
    let diag1 = new Set();
    let diag2 = new Set();
    let results = [];

    const backtrack = (row) => {
        if (row === n) {
            let solution = queens.map(row => row.join(''));
            results.push(solution);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
                continue;
            }

            queens[row][col] = "Q";
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);

            queens[row][col] = ".";
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    };

    backtrack(0);
    return results;
};