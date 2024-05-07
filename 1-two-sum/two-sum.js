/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    hashMapper = new Map()

    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i]

        if(hashMapper.has(diff)){
            return [hashMapper.get(diff), i ]
        }

        hashMapper.set(nums[i], i)
    }   
};