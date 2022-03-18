/*
Given the head of a singly linked list, return true if it is a palindrome.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/* Approach 1 : Copy into Array List and then Use Two Pointer Technique
Time complexity: O(n)
Space complexity: O(n) */

var isPalindrome = function (head) {
  let vals = new Array();

  // Convert LinkedList into ArrayList
  let currentNode = head;
  while (currentNode != null) {
    vals.push(currentNode.val);
    currentNode = currentNode.next;
  }

  // Use two-pointer technique to check for palindrome
  let front = 0;
  let back = vals.length - 1;
  while (front < back) {
    if (vals[front] != vals[back]) {
      return false;
    }
    front++;
    back--;
  }
  return true;
};

// Approach 3: Reverse Second Half In-place

var isPalindrome = function (head) {
  // 1. Find the middle
  let fast = head,
    slow = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // 2. Reverse second half
  let reverse = null;
  while (slow != null) {
    let next = slow.next;
    slow.next = reverse;
    (reverse = slow), (slow = next);
  }

  // 3. Check palindrome
  let p1 = head,
    p2 = reverse;
  while (p2 != null) {
    if (p1.val != p2.val) {
      return false;
    }
    (p1 = p1.next), (p2 = p2.next);
  }
  return true;
};
