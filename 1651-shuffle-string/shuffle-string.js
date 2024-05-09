/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let store = new Array(s.length).fill("")

    for(let i in s){
        store[indices[i]] = s[i]
    }

    return store.join("")
};