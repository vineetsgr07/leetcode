/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {

    if (list1.length > list2.lenght) {
        let temp = list1
        list1 = list2
        list2 = tem
    }

    let store1 = new Map()
    for (let i = 0; i < list1.length; i++) {
        store1.set(list1[i], i)
    }

    let ans = []
    let sum = Infinity
    for (let j = 0; j < list2.length; j++) {
        let currenctSum = store1.get(list2[j])
        if (currenctSum !== undefined) {
            currenctSum = currenctSum + j
            ans.push([list2[j], currenctSum])
            sum = Math.min(sum, currenctSum)
        }
    }

    return ans
        .filter(result => {
            return result[1] == sum
        }).map(item => item[0])

};