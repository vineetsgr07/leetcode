/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    if (!grid || grid.length == 0) return 0

    let m = grid.length;
    let n = grid[0].length;
    let count = 0

    console.log("m", m, n)

    const dfs = (grid, row, col) => {

        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === "0") return

        grid[row][col] = "0"

        dfs(grid, row + 1, col)
        dfs(grid, row - 1, col)
        dfs(grid, row, col - 1)
        dfs(grid, row, col + 1)
    }


    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === "1") {
                count++
                dfs(grid, row, col)
            }
        }
    }

    return count

};