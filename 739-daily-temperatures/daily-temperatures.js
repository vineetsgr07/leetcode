/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    const answer = Array(n).fill(0)
    const stack = []

    for(let i = n - 1; i>=0; i--){
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop();
        }

        if(stack.length > 0){
            answer[i] = stack[stack.length - 1] - i
        }
        
        stack.push(i)
    }
    return answer
}