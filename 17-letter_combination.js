/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations
 * that the number could represent. Return the answer in any order.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1
 * does not map to any letters.
 *
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad","ae","af", "bd", "be", "bf", "cd", "ce", "cf"]
 *
 * Example 2:
 * Input: digits = ""
 * Output: []
 *
 * Example 3:
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 */

/**
 *
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  if (digits.length == 0) return [];
  // global result
  const result = [];

  // alpha hash map
  const alpha = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (i, digits, slate) => {
    // base case
    if (i === digits.length) {
      result.push(slate.join("")); //concat ad,ae,af
      return;
    }

    //depth first search recursive case
    let chars = alpha[digits[i]];

    for (let char of chars) {
      slate.push(char);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
  };

  dfs(0, digits, []);

  return result;
};

console.log(letterCombinations("23"));
