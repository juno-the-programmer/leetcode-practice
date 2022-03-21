/*
Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]
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
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function (head, k) {
  // base case
  if (head == null) return null;
  if (head.next == null) return head;

  // close the linked list into the ring
  let old_tail = head;
  let n;
  for (n = 1; old_tail.next != null; n++) {
    old_tail = old_tail.next;
  }
  old_tail.next = head;

  // find new tail : (n - k % n -1)th node
  // and new head : (n - k % n)th node
  let new_tail = head;
  for (let i = 0; i < n - (k % n) - 1; i++) {
    new_tail = new_tail.next;
  }
  let new_head = new_tail.next;

  // break the ring
  new_tail.next = null;

  return new_head;
};

const result = rotateRight([1, 2, 3, 4, 5], 2);
