/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, 
where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/* Approach 1: Merge and sort
Time complexity: O((n+m)log(n+m)).
Space complexity: O(n)
*/
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }
  nums1.sort();
  return nums1;
};

/*
Approach 2: Three Pointers (Start From the Beginning)
Time complexity: O(n+m)
Space complexity: O(m)
*/
var merge = function (nums1, m, nums2, n) {
  let nums1Copy = new Array(m);
  for (let i = 0; i < m; i++) {
    nums1Copy[i] = nums1[i];
  }

  let p1 = 0;
  let p2 = 0;

  for (let p = 0; p < m + n; p++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[p] = nums1Copy[p1++];
    } else {
      nums1[p] = nums2[p2++];
    }
  }

  return nums1;
};

/*
Approach 3: Three Pointers (Start From the End)
Time complexity: O(n+m)
Space complexity: O(1)
*/
var merge = function (nums1, m, nums2, n) {
  // set p1 and p2 to point to the end of their respective arrays;
  let p1 = m - 1; // 2
  let p2 = n - 1; // 2

  // And move p backwards through the array, each time writing
  // the smallest value pointed at by p1 or p2.
  for (let p = m + n - 1; p >= 0; p--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1--];
    } else {
      nums1[p] = nums2[p2--];
    }
  }

  return nums1;
};
const result = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(result);
