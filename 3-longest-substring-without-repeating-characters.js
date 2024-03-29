/**
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
Input: s = ""
Output: 0
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;
  let max = 0;

  const map = new Map();

  while (i < s.length) {
    let c = s[i];

    while (map.has(c)) {
      map.delete(s[j]);
      ++j;
    }
    map.set(c);
    max = Math.max(max, i - j + 1);
    ++i;
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
