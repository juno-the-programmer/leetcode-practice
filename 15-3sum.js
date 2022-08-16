/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * Example 2:
 * Input: nums = []
 * Output: []
 *
 * Example 3:
 * Input: nums = [0]
 * Output: []
 */
/*
1. sort the array
-3 3 4 -3 1 2
-3 -3 1 2 3 4
2. current, left ,right, find result is equal to 0
3. if sum > 0, right--
4. if sum < 0, left++

Time Complexity: O(n^2)
Space Complexity: O(n)

*/
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    // Two Pointer to solve two sum
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let threeSum = nums[i] + nums[left] + nums[right];
      if (threeSum > 0) {
        right -= 1;
      } else if (threeSum < 0) {
        left += 1;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      }
    }
  }
  return result;
};

const result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);
