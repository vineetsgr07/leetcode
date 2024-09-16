class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        min = prices[0]
        
        for i in range(len(prices)):
            if min < prices[i]:
                profit += prices[i] - min
            
            min = prices[i]
        
        return profit



        