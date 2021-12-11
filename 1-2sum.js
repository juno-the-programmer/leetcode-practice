/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */



/**
 * 
 * @param {*} nums 
 * @param {*} target 
 */


var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let currVal = nums[i];
        if (map.has(currVal)) {
            return [map.get(currVal), i];
        }
        let diff = target - currVal;
        map.set(diff, i);
    }
};

console.log(twoSum([2,7,11,15], 18))