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

//   prepend(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//         this.head = newNode;
//     } else {

//     }
//   }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(JSON.stringify(list));
