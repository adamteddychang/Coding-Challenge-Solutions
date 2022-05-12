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
const removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(-1);
  dummy.next = head;
  const result = dummy;
  let count = 0;
  let tail = head;
  while (count < n) {
    count++;
    tail = tail.next;
  }

  let removed = head;
  let previous = dummy;

  while (tail) {
    tail = tail.next;
    removed = removed.next;
    previous = previous.next;
  }
  previous.next = removed.next;
  return result.next;
};