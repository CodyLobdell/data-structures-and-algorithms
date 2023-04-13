'use strict';

function zipLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let current1 = list1.head;
  let current2 = list2.head;
  let result = new LinkedList();
  while (current1 && current2) {
    result.addToTail(current1.value);
    result.addToTail(current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }
  while (current1) {
    result.addToTail(current1.value);
    current1 = current1.next;
  }
  while (current2) {
    result.addToTail(current2.value);
    current2 = current2.next;
  }
  return result;
}
