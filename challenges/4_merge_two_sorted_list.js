/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  let sorted = new ListNode();
  const head = sorted;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      sorted.next = list1;
      list1 = list1.next;
    } else {
      sorted.next = list2;
      list2 = list2.next;
    }
    sorted = sorted.next;
  }
  if (list1) sorted.next = list1;
  if (list2) sorted.next = list2;
  return head.next;
};