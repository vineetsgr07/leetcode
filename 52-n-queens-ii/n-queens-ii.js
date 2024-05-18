/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let board = Array(n).fill().map(() => Array(n).fill("."));
    let cols = new Set()
    let diag1 = new Set()
    let diag2 = new Set()
    let count = 0

    const backtrack = (row) => {
        if (row === n) {
            count += 1
            return
        }
        for (let col = 0; col < n; col++) {

            if (cols.has(col) || diag1.has(row - col) || diag2.has(col + row)) {
                continue
            }

            board[row][col] = "Q"
            cols.add(col)
            diag1.add(row - col)
            diag2.add(col + row)

            backtrack(row + 1)

            board[row][col] = "."
            cols.delete(col)
            diag1.delete(row - col)
            diag2.delete(col + row)
        }
    }

    backtrack(0)
    return count

};