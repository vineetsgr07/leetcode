/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

    let store = []

    for (let i = 0; i <= rowIndex; i++) {
        store[i] = []
        store[i][0] = 1

        for (let j = 1; j < i; j++) {
            store[i][j] = store[i - 1][j - 1] + store[i - 1][j]
        }

        store[i][i] = 1
    }

    return store[rowIndex]
};