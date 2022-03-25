/*
Given a string s, return true if a permutation of the string could form a palindrome.

Example 1:
Input: s = "code"
Output: false

Example 2:
Input: s = "aab"
Output: true

Example 3:
Input: s = "carerac"
Output: true
*/
/**
 * @param {string} s
 * @return {boolean}
 */

/*
Approach 1 : Brute Force
Time complexity : O(n) We iterate constant number of times(128) over the string ss of length nn, i.e. O(128 . n) = O(n) 
Space complexity : O(1) Constant extra space is used.
*/
var canPermutePalindrome = function (s) {
  let count = 0;
  for (let i = 0; i < 128 && count <= 1; i++) {
    let ct = 0;
    for (let j = 0; j < s.length; j++) {
      if (s.charCodeAt(j) == i) ct++;
    }
    count += ct % 2;
  }
  return count <= 1;
};

/*
Approach 2 : HashMap
Time complexity : O(n) We traverse over the given string ss with nn characters once. 
                       We also traverse over the map which can grow up to a size of nn in case all characters in ss are distinct.
Space complexity : O(1) The map can grow up to a maximum number of all distinct elements. 
                        However, the number of distinct characters are bounded, so as the space complexity.
*/
var canPermutePalindrome = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  let count = 0;
  for (const [key, value] of map) {
    count += map.get(key) % 2;
  }
  return count <= 1;
};

/*
Approach 3 : Single Pass
Time Complexity: O(n) We traverse over the string s of length n once only.
Space complexity: O(1) An array of constant size(128) is used.
*/
var canPermutePalindrome = function (s) {
  // charCodeAt
  // c: 99
  // a: 97
  // r: 114
  // e: 101
  let map = new Array(128).fill(0); // 128 can handle all the characters in ASCII table
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i)] = map[s.charCodeAt(i)] + 1;

    if (map[s.charCodeAt(i)] % 2 == 0) {
      count--;
    } else {
      count++;
    }
  }
  return count <= 1;
};

/*
Approach 4 : Using Set
Time complexity : O(n) We traverse over the string s of length n once only.
Space complexity : O(1) The set can grow up to a maximum number of all distinct elements. However, the number of distinct characters are bounded, so as the space complexity.
*/
var canPermutePalindrome = function (s) {
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s.charAt(i))) {
      set.delete(s.charAt(i));
    } else {
      set.add(s.charAt(i));
    }
  }
  return set.size <= 1;
};

const result = canPermutePalindrome("aab");
console.log(result);
