/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {

    let store = new Map()

    for (let i = 0; i < arr.length; i++) {
        store.set(arr[i], (store.get(arr[i]) || 0) + 1)
    }

    let storeByValue = new Map()
    for (let item of store) {
        if (storeByValue.get(item[1])) {
            return false
        } else {
            storeByValue.set(item[1], item[0])
        }
    }

    return true

};