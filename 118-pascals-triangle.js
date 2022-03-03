/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = new Array();
    const prevRow = res[i - 1];
    row.push(1);

    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }

    row.push(1);
    res.push(row);
  }

  return res;
};

const result = generate(5);
console.log(result);
