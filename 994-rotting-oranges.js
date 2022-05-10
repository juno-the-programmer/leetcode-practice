/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
Time Complexity: O(N), where N is the size of the grid.
Space Complexity: O(N), where N is the size of the grid.
*/
var orangesRotting = function(grid) {

    let ROWS = grid.length;
    let COLS = grid[0].length;
    const queue = [];
    let freshOranges = 0;

    for(let r = 0; r < ROWS; r++) {
        for(let c = 0; c < COLS; c++) {
            if(grid[r][c] == 2) {
                queue.push([r,c]);
            } else if (grid[r][c] == 1) {
                freshOranges++;
            }
        }
    }

    let minutesElapsed = -1;

    const directions = [
        [1,0], //top,right,bottom,left
        [0,1],
        [-1,0],
        [0,-1]
    ];
  
    queue.push([-1,-1]); //ticker of timestamp

    while(queue.length > 0) {
        const current = queue.shift();
        let row = current[0];
        let col = current[1];

        if(row == -1) {
            minutesElapsed++;
            if(queue.length > 0) {
                queue.push([-1,-1]);
            }
        } else {
            for(let d of directions) {
                let neighborRow = row + d[0];
                let neighborCol = col + d[1];
                if(neighborRow < ROWS && neighborRow >= 0 &&
                    neighborCol < COLS && neighborCol >= 0) {
                    if(grid[neighborRow][neighborCol] == 1) {
                        grid[neighborRow][neighborCol] = 2;
                        freshOranges--;
                        queue.push([neighborRow,neighborCol]);
                    }
                }
            }
        }
    }

    return freshOranges == 0 ? minutesElapsed : -1
};

/*
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
*/
const result = orangesRotting([[2,1,1],[1,1,0],[0,1,1]]);
console.log(result);