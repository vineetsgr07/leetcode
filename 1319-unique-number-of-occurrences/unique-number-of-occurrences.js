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
        let key = item[0]
        let value = item[1]

        if (storeByValue.get(value)) {
            return false
        } else {
            storeByValue.set(value, key)
        }
    }

    return true

};