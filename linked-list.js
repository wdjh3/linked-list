class LinkedList {
  #head = null;
  constructor() {}

  append(value) {
    const newNode = new Node(value);
    if (!this.#head) {
      this.#head = newNode;
    } else {
      let currentNode = this.#head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.#head) {
      this.#head = newNode;
    } else {
      newNode.nextNode = this.#head;
      this.#head = newNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.#head;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }

    return count;
  }

  head() {
    if (!this.#head) {
      return undefined;
    }
    return this.#head;
  }

  tail() {
    if (!this.#head) {
      return undefined;
    }
    let currentNode = this.#head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    if (!this.#head || index >= this.size()) {
      return undefined;
    }
    let currentNode = this.#head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    if (!this.#head) {
        return undefined;
    }
    const headNode = this.#head;
    this.#head = headNode.nextNode;
    return headNode;
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
// console.log(list.pop());
// console.log(list.pop());
// console.log(JSON.stringify(list.head()));
