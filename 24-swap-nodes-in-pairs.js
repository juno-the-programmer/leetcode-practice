/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes 
(i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
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
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  const swapPairsFunc = (head) => {
    // base case
    if (head == null || head.next == null) {
      return head;
    }

    // Nodes to be swapped
    let firstNode = head;
    let secondNode = head.next;

    // Swapping
    firstNode.next = swapPairsFunc(secondNode.next);
    secondNode.next = firstNode;

    // Now the head is the second node
    return secondNode;
  };

  return swapPairsFunc(head);
};

console.log(swapPairs([1, 2, 3, 4]));
