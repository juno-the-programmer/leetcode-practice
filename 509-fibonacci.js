/**
 * The Fibonacci number, commonly denoted F(n) form a sequence, called the Fibonnaci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 * F(0) = 0
 * F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1
 * Given n, calculate F(n).
 *
 * Example 1:
 * Input n = 2
 * Output: 1
 *
 * Example 2:
 * Input n = 3
 * Output: 2
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

var result = fib(4);
console.log(result);
