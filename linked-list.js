class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let lastNode = new Node(value);
    if (this.head) {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = lastNode;
    } else {
      this.head = lastNode;
    }
  }
  prepend(value) {
    if (this.head) {
      let firstNode = new Node(value, this.head);
      this.head = firstNode;
    } else {
      this.head = new Node(value);
    }
  }
  size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  head() {
    return this.head;
  }
  tail() {
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    return temp;
  }
  at(index = 0) {
    if (index <= 0) {
      return "That node doesn't exist. Dummy";
    }
    let count = 1;
    let temp;
    if (this.head) {
      temp = this.head;
    } else {
      return "That node doesn't exist. Dummy";
    }
    while (count < index) {
      count++;
      temp = temp.next;
      if (temp == null) {
        return "That node doesn't exist. Dummy";
      }
    }

    return temp;
  }
  pop() {
    let last;
    let secondToLast;
    if (this.head) {
      last = this.head;
    } else {
      return "There are no nodes to remove";
    }
    while (last.next) {
      secondToLast = last;
      last = last.next;
    }
    if (secondToLast == null) {
      this.head = null;
    } else {
      secondToLast.next = null;
    }
  }
  contains(value) {
    let temp;
    if (this.head) {
      temp = this.head;
    } else {
      return false;
    }
    if (temp.value === value) {
      return true;
    } else if (temp.next == null) {
      return false;
    }
    while (temp.next) {
      if (temp.value === value) {
        return true;
      } else {
        temp = temp.next;
      }
    }
    if (temp.value === value) {
      return true;
    } else {
      return false;
    }
  }
  find(value) {
    if (this.contains(value)) {
      let index = 1;
      let temp = this.head;
      while (temp) {
        if (temp.value == value) {
          return index;
        } else {
          temp = temp.next;
          index++;
        }
      }
    } else {
      return null;
    }
  }
  toString() {
    let listString = "";
    let temp = this.head;
    while (temp) {
      listString += `(${temp.value}) -> `;
      temp = temp.next;
    }
    listString += null;
    return listString;
  }
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
node.prepend(3);
node.append(4);
node.append(5);
node.append(6);

console.log(node.toString());
