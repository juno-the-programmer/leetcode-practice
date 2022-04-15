/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
/* 
Approach 1 : Brute Force
Time Complexity: O(n^2)
Space Complexity: O(1)
*/
var maxProfit = function (prices) {
  let maxValue = 0;
  let right = prices.length - 1;

  for (let i = 0; i < prices.length; i++) {
    while (right > i) {
      let profit = prices[right] - prices[i];
      maxValue = Math.max(maxValue, profit);
      right--;
    }
    right = prices.length - 1;
  }

  return maxValue;
};

/*
Approach 2: One Pass
Time Complexity: O(n)
Space Complexity: O(1)
*/
var maxProfit = function (prices) {
  let minprice = Number.MAX_VALUE;
  let maxprofit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }

  return maxprofit;
};

const result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result);
