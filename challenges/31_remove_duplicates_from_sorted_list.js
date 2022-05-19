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
const deleteDuplicates = function (head) {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    if (prev !== null && curr.val === prev.val) {
      prev.next = curr.next;
    } else prev = curr;

    curr = curr.next;
  } return head;
};