'use strict';

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;


let current = node1;

while (current !== null) {
  console.log(current.value);
  current = current.next;
}
