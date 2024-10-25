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
var middleNode = function (head) {
  let counter = 1;
  let next = head;
  while (next.next !== undefined) {
    next = next.next;
    counter++;
  }
  console.log(Math.ceil(counter / 2));

  let counter1 = 1;
  next = head;
  while (counter1 < Math.ceil(counter / 2)) {
    next = next.next;
    counter1++;
  }

  return next.val;
};

const node1 = {
  next: undefined,
  val: 5,
};

const node2 = {
  next: node1,
  val: 4,
};

const node3 = {
  next: node2,
  val: 3,
};

const node4 = {
  next: node3,
  val: 2,
};

const node5 = {
  next: node4,
  val: 1,
};

const node6 = {
  next: node5,
  val: 10,
};

console.log(middleNode(node6));
