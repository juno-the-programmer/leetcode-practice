/*
Given an m x n integers matrix, return the length of the longest increasing path in matrix.
From each cell, you can either move in four directions: left, right, up, or down.
You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

Example 1:
Input: matrix = [
[9,9,4],
[6,6,8],
[2,1,1]
]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].

Example 2:
Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

Example 3:
Input: matrix = [[1]]
Output: 1
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  if (matrix.length === 0) return 0;

  const directions = [
    [0, 1], // right
    [1, 0], // bottom
    [0, -1], // left
    [-1, 0], // top
  ];

  const maxRow = matrix.length;
  const maxCol = matrix[0].length;

  const cache = Array(maxRow)
    .fill(0)
    .map(() => Array(maxCol).fill(0));

  let ans = 0;

  const dfs = (matrix, r, c, cache) => {
    if (cache[r][c] !== 0) return cache[r][c];
    for (let direction of directions) {
      const newRow = r + direction[0];
      const newCol = c + direction[1];
      const rowInBound = 0 <= newRow && newRow < maxRow;
      const colInBound = 0 <= newCol && newCol < maxCol;
      if (rowInBound && colInBound && matrix[r][c] < matrix[newRow][newCol]) {
        cache[r][c] = Math.max(cache[r][c], dfs(matrix, newRow, newCol, cache));
      }
    }
    return ++cache[r][c];
  };

  for (let r = 0; r < maxRow; r++) {
    for (let c = 0; c < maxCol; c++) {
      ans = Math.max(ans, dfs(matrix, r, c, cache));
    }
  }

  return ans;
};

const result = longestIncreasingPath([
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
]);
console.log(result);
