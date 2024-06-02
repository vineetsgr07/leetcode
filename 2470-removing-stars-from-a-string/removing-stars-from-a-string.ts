function removeStars(s: string): string {

    let count = 0
    let n = s.length - 1

    let arr = s.split("")

    for (let i = n; i >= 0; i--) {

        if (arr[i] !== "*" && count > 0) {
            arr[i] = ""
            count--
        }

        if(arr[i] == "*"){
            arr[i] = ""
            count++
        }
    }

    return arr.join("")

};