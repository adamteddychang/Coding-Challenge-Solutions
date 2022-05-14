// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let curr = linkedList;
  while (curr !== null) {
    let nextN = curr.next;
    while (nextN !== null && nextN.value === curr.value) {
      nextN = nextN.next;
    }
    curr.next = nextN;
    curr = nextN;
  }

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
