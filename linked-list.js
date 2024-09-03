class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let lastNode = new Node(value);
    if (!this.head) {
      this.head = lastNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = lastNode;
    }
  }
  prepend() {}
}
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
let node = new LinkedList();
node.append(1);
node.append(2);
node.append(3);
console.log(node);
