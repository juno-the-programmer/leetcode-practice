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
var lengthOfLongestSubstring = function(s) {
    
    var chars = [];
    let left = 0;
    let right = 0;
    
    let res = 0;
    
    while (right < s.length) {
        let r = s[right];
        
        let index = chars[r];
        if (index != null && index >= left && index < right) {
            left = index + 1;
        }
        
        res = Math.max(res, right - left + 1);
        
        chars[r] = right;
        right++;        
    }
    
    return res;
    
    
};

console.log(lengthOfLongestSubstring(""));