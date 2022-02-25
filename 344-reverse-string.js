/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

const reverseString = (s) => {
  const helper = (start, end, s) => {
    if (start >= end) {
      return s;
    }
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    return helper(start + 1, end - 1, s);
  };

  return helper(0, s.length - 1, s);
};

console.log(reverseString(["a", "b", "c", "d", "e"]));
