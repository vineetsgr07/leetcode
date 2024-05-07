/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    
    let n = heights.length
    let answer = Array(n).fill(0)
    let stack = []
    

    for(let i = n - 1; i >= 0; i--){
        let count = 0;
        
        while(stack.length > 0 && stack[stack.length - 1] <= heights[i]){
            stack.pop()
            count++
        }

        if(stack.length > 0) {
           count++
        }

        answer[i] = count

        stack.push(heights[i]);
    }

    return answer

};