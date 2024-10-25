var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

class Stack {
  values = [];

  insert(value) {
    this.values.push(value);
  }

  remove() {
    return this.values.pop();
  }
}

class Queue {
  values = [];

  insert(value) {
    this.values.push(value);
  }

  remove() {
    return this.values.shift();
  }
}

class PriorityQueue {
  values = [];

  insert(value) {
    this.values.push(value);
    this.values.sort((a, b) => b - a);
  }

  remove() {
    return this.values.shift();
  }
}

let caseQnt = parseInt(lines.shift());

while (caseQnt) {
  let i = 0;

  let isStack = true;
  let isQueue = true;
  let isPriorityQueue = true;

  const stack = new Stack();
  const queue = new Queue();
  const priorityQueue = new PriorityQueue();

  while (i < caseQnt) {
    const [opearation, value] = lines.shift().split(' ');
    i++;

    if (opearation === '1') {
      stack.insert(parseInt(value));
      queue.insert(parseInt(value));
      priorityQueue.insert(parseInt(value));
    } else if (opearation === '2') {
      isStack = isStack && stack.remove() === parseInt(value);
      isQueue = isQueue && queue.remove() === parseInt(value);
      isPriorityQueue =
        isPriorityQueue && priorityQueue.remove() === parseInt(value);
    }
  }

  if (isStack && !isQueue && !isPriorityQueue) {
    console.log('stack');
  } else if (!isStack && isQueue && !isPriorityQueue) {
    console.log('queue');
  } else if (!isStack && !isQueue && isPriorityQueue) {
    console.log('priority queue');
  } else if (isStack && isQueue && !isPriorityQueue) {
    console.log('not sure');
  } else if (isStack && !isQueue && isPriorityQueue) {
    console.log('not sure');
  } else if (!isStack && isQueue && isPriorityQueue) {
    console.log('not sure');
  } else if (isStack && isQueue && isPriorityQueue) {
    console.log('not sure');
  } else if (!isStack && !isQueue && !isPriorityQueue) {
    console.log('impossible');
  }

  caseQnt = parseInt(lines.shift());
}

// const stack = new Stack();
// stack.insert(1);
// stack.insert(2);
// stack.insert(3);
// console.log(stack.remove());
// console.log(stack.remove());
// console.log(stack.remove());

// const queue = new Queue();
// queue.insert(1);
// queue.insert(2);
// queue.insert(3);
// console.log(queue.remove());
// console.log(queue.remove());
// console.log(queue.remove());

// const priorityQueue = new PriorityQueue();
// priorityQueue.insert(1);
// priorityQueue.insert(2);
// priorityQueue.insert(7);
// priorityQueue.insert(3);
// console.log(priorityQueue.remove());
// console.log(priorityQueue.remove());
// console.log(priorityQueue.remove());
// console.log(priorityQueue.remove());
