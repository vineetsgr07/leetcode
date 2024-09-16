class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        index = 0
        while index < k:
            last_element = nums.pop(len(nums) - 1)
            nums.insert(0, last_element)
            index += 1
        
        return nums


            

        