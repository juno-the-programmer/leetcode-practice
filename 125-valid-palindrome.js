/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
// Approach 1 : Brute Force
// Time Complexity: O(n)
// Space Complexity: O(n)
var isPalindrome = function (s) {
  const isAlphanumeric = (c) => {
    if (/[a-zA-Z0-9]/.test(c)) {
      return true;
    } else {
      return false;
    }
  };

  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (isAlphanumeric(s[i])) {
      newStr += s[i].toLowerCase();
    }
  }

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

// Approach 2: Two Pointer
// Time Complexity: O(n)
// Space Complexity: O(1)
var isPalindrome = function (s) {
  let i = 0; //left pointer
  let j = s.length - 1; //right pointer

  while (i < j) {
    if (/\W/.test(s[i])) {
      // \W is shortcut for ^[a-zA-Z0-9]
      i++;
      continue;
    }

    if (/\W/.test(s[j])) {
      j--;
      continue;
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }
  return true;
};
const result = isPalindrome("A man, a plan, a canal: Panama");
console.log(result);
