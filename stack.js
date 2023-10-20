class Node {
    constructor(data){
        this.data = data;
        this.next = null 
    }
}
class Stack {
    constructor(){
        this.items = []
    }
    push(node){
        this.items.unshift(node)
    }
    isEmpty(){
        return !this.items.length
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        return this.items.shift()
    }
    top(){
        return this.items[0]
    }
    
}
const node1 = new Node(10)
const stack = new Stack()
stack.push(node1)
console.log(stack)