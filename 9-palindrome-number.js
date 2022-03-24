/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/
/*
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x == 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (x == revertedNumber || x == Math.floor(revertedNumber / 10)) {
    return true;
  }

  return false;
};

const result = isPalindrome(10);

console.log(result);
/*
First of all we should take care of some edge cases. All negative numbers are not palindrome, for example: -123 is not a palindrome since the '-' does not equal to '3'. 
So we can return false for all negative numbers.

Now let's think about how to revert the last half of the number. 
For number 1221, if we do 1221 % 10, we get the last digit 1, to get the second to the last digit, we need to remove the last digit from 1221, 
we could do so by dividing it by 10, 1221 / 10 = 122. Then we can get the last digit again by doing a modulus by 10, 122 % 10 = 2, 
and if we multiply the last digit by 10 and add the second last digit, 1 * 10 + 2 = 12, it gives us the reverted number we want. 
Continuing this process would give us the reverted number with more digits.

Now the question is, how do we know that we've reached the half of the number?

Since we divided the number by 10, and multiplied the reversed number by 10, when the original number is less than the reversed number, 
it means we've processed half of the number digits.
*/
/*                
                   x                  revertedNumber
1221 % 10 = 1  |  1221 / 10 = 122   | 0 * 10 + (1221 % 10) = 1
 122 % 10 = 2  |   122 / 10 = 12    | 1 * 10 + (122 % 10) = 12
*/
