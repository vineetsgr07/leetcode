/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {

    let str1 = version1.split(".")
    let str2 = version2.split(".")

    let maxLentgh = Math.max(str1.length, str2.length)

    for (let i = 0; i < maxLentgh; i++) {
        if (parseInt(str1[i] || 0) < parseInt(str2[i] || 0)) return -1
        if (parseInt(str1[i] || 0) > parseInt(str2[i] || 0)) return 1
    }

    return 0

};