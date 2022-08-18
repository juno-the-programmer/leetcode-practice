/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0
*/
var coinChange = function (coins, amount) {
  const recursive = (coins, amount, count) => {
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    if (count[amount - 1] != 0) return count[amount - 1];

    let min = Number.MAX_VALUE;
    for (let coin of coins) {
      const remainder = amount - coin;
      const remainderResult = recursive(coins, remainder, count);
      if (remainderResult >= 0 && remainderResult < min) {
        min = 1 + remainderResult;
      }
    }

    count[amount - 1] = min === Number.MAX_VALUE ? -1 : min;
    return count[amount - 1];
  };

  return recursive(coins, amount, Array(amount).fill(0));
};

const result = coinChange([1, 2, 5], 11);
console.log(result);
