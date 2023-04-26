'use strict';

function breadth_first(tree) {

  let queue = [tree];

  let values = [];


  while (queue.length) {
    let node = queue.shift();

    values.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return values;
}
