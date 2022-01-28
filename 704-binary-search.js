/**
 * 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 */

var search = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    let mid = left + (right - left) / 2; // 3
    
    console.log("mid:" + mid);
    if (nums[mid] == target) {
      return mid;
    }

    if (nums[mid] < target) {
      // 5 < 9
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;

  // left = 0, right = 6, mid = (6 - 0) / 2 = 3
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
