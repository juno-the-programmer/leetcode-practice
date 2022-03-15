/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
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
 * @return {ListNode}
 */
// Approach 1: Iterative

var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current != null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// Approach 2: Recursive
var reverseList = function (head) {
  const reverse = (head, prev = null) => {
    if (head === null) return prev;

    const next = head.next;
    head.next = prev;
    return reverse(next, head);
  };
  return reverse(head);
};
