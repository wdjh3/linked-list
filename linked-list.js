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

  contains(value) {
    let currentNode = this.#head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let currentNode = this.#head;
    for (let i = 0; !!currentNode; i++) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.nextNode;
    }
    return -1;
  }

  toString() {
    let string = "";
    let currentNode = this.#head;
    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    string += "null";

    return string;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export { LinkedList };
