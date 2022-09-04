/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
/**
 * @param {number} n
 * @return {number}
 */
/*
Approach 1: Dynamic Programming
Time complexity : O(n). Single loop up to n.
Space complexity : O(n). dp array of size n is used.
*/
var climbStairs = function (n) {
  if (n === 1) return 1;
  const table = new Array(n + 1).fill(0);

  table[1] = 1;
  table[2] = 2;

  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
};

/*
Approach 2:
Time complexity: O(2^n) Size of recursion tree will be 2^n
Space complexity: O(n) The depth of the recursion tree can go up to n

With Memoization:
Time complexity : O(n) Size of recursion tree can go upto n.
Space complexity : O(n) The depth of recursion tree can go up to n.
*/
var climbStairs = (n) => {
  const climbStair = (i, n, memo = {}) => {
    if (i in memo) return memo[i];
    if (i > n) return 0;
    if (i === n) return 1;
    memo[i] = climbStair(i + 1, n, memo) + climbStair(i + 2, n, memo);
    return memo[i];
  };

  return climbStair(0, n);
};

/*
Time complexity : O(n) Single loop upto nn is required to calculate nth fibonacci number.
Space complexity : O(1) Constant space is used.
*/
const climbStairs = (n) => {
  if (n == 1) {
    return 1;
  }
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

console.log(climbStairs(3));