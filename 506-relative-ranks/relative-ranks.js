/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {

    let storeByDecending = score.slice(0).sort((a, b) => b - a)

    return score.map(num => {
        if (num == storeByDecending[0]) return "Gold Medal"
        if (num == storeByDecending[1]) return "Silver Medal"
        if (num == storeByDecending[2]) return "Bronze Medal"

        return (storeByDecending.indexOf(num) + 1).toString()
    })

};