/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    let max = 0

    const dfs = (i, j) => {
        if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] == 0) {
            return 0
        }

        let temp = grid[i][j]
        grid[i][j] = 0
        let top = dfs(i - 1, j)
        let right = dfs(i, j + 1)
        let bottom = dfs(i + 1, j)
        let left = dfs(i, j - 1)

        grid[i][j] = temp

        return grid[i][j] + Math.max(left, right, top, bottom)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            max = Math.max(max, dfs(i, j))
        }
    }

    return max
};