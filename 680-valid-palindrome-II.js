/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
Input: s = "abc"
Output: false
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const checkPalindrome = (s, i, j) => {
    while (i < j) {
      if (s[i] != s[j]) {
        return false;
      }
      i++;
      j--;
    }

    return true;
  };

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return checkPalindrome(s, i, j - 1) || checkPalindrome(s, i + 1, j);
    }
    i++;
    j--;
  }

  return true;
};

const result = validPalindrome("abca");
console.log(result);
