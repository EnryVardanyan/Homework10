class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
    return this;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }

  isEmpty() {
    return this.size === 0;
  };
  printList(){
    let current = this.head
    let list = ''    
    while(current){
      list += `${current.data} `
      current = current.next  
    }
    return list
  }
  insert(data, index = -1){
    if(index < 0 || index > this.size) {
      return this}
    if(index === 0) return this.prepend(data)
    if(index === this.size) return this.append(data)
    const newNode = new Node(data)
    let current = this.head
    let previous = null
    let count = 0
    while(count < index){
    previous = current
    current = current.next
    count++
    }
    newNode.next = current
    previous.next = newNode
    this.size++
    return this
  }
}
const myList = new LinkedList();
myList.append(7);
myList.append(6);
myList.prepend(8);
myList.insert(9, 0);
console.log(myList.printList())