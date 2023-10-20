class Node {
    constructor(data){
        this.data = data;
        this.next = null 
    }
}
class Stack {
    constructor(){
        this.top = null
    }
    push(node){
        if(this.isEmpty()) {
            this.top = node
            return this
        }
        this.top.next = this.top
        this.top = node 
    }
    isEmpty(){
        return !this.top
    }
}
const node1 = new Node(10)
const stack = new Stack()
stack.push(node1)
console.log(stack)