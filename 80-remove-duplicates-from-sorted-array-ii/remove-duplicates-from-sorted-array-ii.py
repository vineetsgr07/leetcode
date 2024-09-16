class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        count_map = {}
        index = 0

        for i in range(len(nums)):            
            if nums[i] not in count_map:
                count_map[nums[i]] = 1
            else:
                count_map[nums[i]] += 1

            if count_map[nums[i]] <= 2:
                nums[index] = nums[i]
                index += 1
    
        return index

                