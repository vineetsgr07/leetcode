/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {

    const canReplace = (string1) => {
        let hash = new Map()

        for (let i = 0; i < pattern.length; i++) {
            let toBeMapped = hash.get(pattern[i])
            if (toBeMapped) {
                if (toBeMapped !== string1[i]) {
                    return false
                }
            } else {
                if(string1.slice(0, i).includes(string1[i])){
                    return false
                }
                hash.set(pattern[i], string1[i])
            }
        }
        return true
    }

    let store = []

    for(let j=0; j<words.length;j++){
        if(canReplace(words[j])){
            store.push(words[j])
        }
    }

    return store;
};