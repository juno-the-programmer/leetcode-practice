/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
Approach 1: Depth First Search
Time complexity : O(M×N) where M is the number of rows and N is the number of columns.
Space complexity : worst case O(M×N) in case that the grid map is filled with lands where DFS goes by M×N deep.
*/
var numIslands = function (grid) {
  if (grid == null || grid.length == 0) {
    return 0;
  }

  let nr = grid.length;
  let nc = grid[0].length;
  let num_islands = 0;

  const dfs = (grid, r, c) => {
    let nr = grid.length;
    let nc = grid[0].length;

    if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == "0") {
      return;
    }

    grid[r][c] = "0";
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
  };

  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] == "1") {
        num_islands++;
        dfs(grid, r, c);
      }
    }
  }

  return num_islands;
};

const result = numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);

console.log(result);
