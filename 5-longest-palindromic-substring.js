/*
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
*/
/**
 * @param {string} s
 * @return {string}
 */
/*
Approach 1: Brute Force
Time complexity : O(n^3)
Space complexity : O(1)
*/
/*
babad
b, ba, bab, baba, babad
a, ab, aba, abad
b, ba, bad
a, ad
d
*/
var longestPalindrome = function (s) {
  const isPanlindrome = (s) => {
    for (let l = 0; l < s.length; l++) {
      if (s[l] !== s[s.length - l - 1]) {
        return false;
      }
    }
    return true;
  };

  let maxSubstring = "";
  for (let a = 0; a < s.length; a++) {
    for (let i = 1; i <= s.length; i++) {
      // 1. substring
      let tempSubstring = s.substring(a, i);
      // 2. check is palindrome
      const isDrome = isPanlindrome(tempSubstring);
      // 3. Get the max
      if (isDrome && tempSubstring.length > maxSubstring.length) {
        maxSubstring = tempSubstring;
      }
    }
  }
  return maxSubstring;
};
/*
Approach 2 : Expand Around Center
Time complexity : O(n^2)
Space complexity : O(1)
*/
var longestPalindrome = function (s) {
  const getDrome = (left, right, s) => {
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) break;
      left--;
      right++;
    }
    return [left + 1, right];
  };

  let max = [0, 1];
  for (let i = 0; i < s.length; i++) {
    let even = getDrome(i - 1, i, s);
    let odd = getDrome(i - 1, i + 1, s);
    let currMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax;
  }

  return s.slice(max[0], max[1]);
};

const result = longestPalindrome("babad");
console.log(result);
