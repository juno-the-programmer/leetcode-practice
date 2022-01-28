/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  let i = 0;
  while (i < s.length) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack.length == 0) return false;
      let open = stack.pop();
      let closed = s[i];

      if (closed !== map.get(open)) {
        return false;
      }
    }

    i++;
  }

  return stack.length == 0;
};
