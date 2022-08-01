/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/
var trap = function (height) {
  if (height === null) return 0;

  let l = 0;
  let r = height.length - 1;
  let leftMax = height[l];
  let rightMax = height[r];
  let res = 0;

  while (l < r) {
    if (leftMax < rightMax) {
      l++;
      leftMax = Math.max(leftMax, height[l]);
      res += leftMax - height[l];
    } else {
      r--;
      rightMax = Math.max(rightMax, height[r]);
      res += rightMax - height[r];
    }
  }

  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

/*
Approach 1: Linear
Time Complexity: O(n)   Space Complexity: O(n)
-----------------------------------
          | 0 | 2 | 4 | 1 | 2 | 0 |  min(l,r) - height[i]
-----------------------------------
 input    | 4 | 2 | 0 | 3 | 2 | 5 |
-----------------------------------
maxLeft   | 4 | 4 | 4 | 4 | 4 | 5 |
-----------------------------------
maxRight  | 5 | 5 | 5 | 5 | 5 | 5 |   
-----------------------------------
min(l,r)  | 4 | 4 | 4 | 4 | 4 | 5 |
-----------------------------------

Approach 2: Two Pointer 
Time Complexity: O(n)   Space Complexity: O(1)
maxLeft: 0
maxRight: 0

input   | 0 | 2 | 4 | 1 | 2 | 0 |
          L                   R

*/
