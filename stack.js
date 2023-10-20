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
    getSize(){
        return this.items.length
    }

}
const stack = new Stack()
stack.push(6)
console.log(stack.getSize())

console.log(stack)