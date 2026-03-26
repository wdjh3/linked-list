class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

// example uses class syntax - adjust as necessary
// const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.prepend("hamster");
// list.prepend("snake");
// list.prepend("turtle");

// console.log(JSON.stringify(list));
