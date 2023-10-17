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
      return false}
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
  removeAt(index){
    if(index < 0 || index > this.size) return null
    if(index === 0) {
      const removedData = this.head.data;
      this.head = this.head.next;
      this.size--;
      return removedData;
    }
    let current = this.head
    let currentIdx = 0
    while(currentIdx !== index - 1){
        current = current.next
        currentIdx++
    } 
    current.next = current.next.next
    this.size--
    return current.data
    }
  remove(data){
    if(this.isEmpty()) return false
    if(this.head.data === data) {
      this.head = this.head.next
      this.size --
      return this
    }
    let current = this.head
    while (current && current.next && current.next.data !== data) {
      current = current.next
    }
    if (!current || !current.next) {
      return false
    }
    current.next = current.next.next
    this.size --
    return this
    }
    getSize(){
      let sizeArr = [...this.printList()]
      let size = sizeArr.filter((e) => e !== " ")
      return size.length
    }
}
const myList = new LinkedList();
myList.append(7);
myList.append(6);
myList.prepend(8);
myList.prepend(1);
myList.insert(9, 0);
myList.removeAt(3)
myList.remove(6)
console.log(myList.getSize())
console.log(myList.printList())