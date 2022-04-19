/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Example 1:
Input: n = 10, pick = 6
Output: 6

Example 2:
Input: n = 1, pick = 1
Output: 1

Example 3:
Input: n = 2, pick = 1
Output: 1
*/
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guess = function (num) {
  const pick = 6;
  if (num > pick) {
    return -1;
  } else if (num < pick) {
    return 1;
  } else {
    return 0;
  }
};
var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let res = guess(mid);

    if (res == 0) {
      return mid;
    } else if (res < 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

const result = guessNumber(10);
console.log(result);
