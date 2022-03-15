/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
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
 * @param {number} n
 * @return {ListNode}
 */
/* Approach 1 : Two Pass Algorithm
Time Complexity : O(2n) = O(n)
Space Complexity : O(1)
*/
var removeNthFromEnd = function (head, n) {
  let length = 0;
  let currentNode = head;

  while (currentNode != null) {
    currentNode = currentNode.next;
    length++;
  }

  if (length === 0) {
    return head.next;
  }

  const nodeBeforeRemovedIndex = length - n - 1;
  currentNode = head;

  for (let i = 0; i < nodeBeforeRemovedIndex; i++) {
    currentNode = currentNode.next;
  }

  currentNode.next = currentNode.next.next;
  return head;
};

/* Approach 2 : One pass Algorithm
Time Complexity : O(n)
Space Complexity: O(1)
*/
var removeNthFromEnd = function (head, n) {
  let dummy = [];
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  while (first != null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;
  return dummy.next;
};
