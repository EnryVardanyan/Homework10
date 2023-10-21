class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}
class Stack {
    constructor(){
        this.top = null
        this.size = 0
    }
    push(node){
        if(!this.size) {
            this.top = node
            this.size ++
            return this
        }
        node.next = this.top
        this.top = node
        this.size ++ 
        return this
    }
    isEmpty(){
        return !this.size 
    }
    pop(){
        if(!this.size) return null
        const pop = this.top
        this.top = this.top.next
        this.size--
        return pop
    }
    peek(){
        return this.top
    }
    getSize(){
        return this.size
    }
}

const stack = new Stack()
const node1 = new Node(6)
const node2 = new Node(7)
stack.push(node1)
stack.push(node2)
stack.pop()
console.log(stack)