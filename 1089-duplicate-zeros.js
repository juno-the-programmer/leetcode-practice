/*
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.
Do the above modifications to the input array in place and do not return anything.

Example 1:
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:
Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
*/
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let zeros = 0;
  let n = arr.length - 1;

  for (let left = 0; left <= n - zeros; left++) {
    if (arr[left] === 0) {
      if (left === n - zeros) {
        arr[n] = 0;
        n = n - 1;
        break;
      }
      zeros++;
    }
  }

  let last = n - zeros;

  for (let i = last; i >= 0; i--) {
    if (arr[i] == 0) {
      arr[i + zeros] = 0;
      zeros--;
      arr[i + zeros] = 0;
    } else {
      arr[i + zeros] = arr[i];
    }
  }

  return arr;
};

const result = duplicateZeros([8, 4, 5, 0, 0, 0, 0, 7]);
console.log(result.toString()); // [8,4,5,0,0,0,0,0]
