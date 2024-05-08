/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {
        for (const coin of coins) {
            if (a - coin >= 0) {
                dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
            }
        }
    }

    return dp[amount] !== amount + 1 ? dp[amount] : -1;
}