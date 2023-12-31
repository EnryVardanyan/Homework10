class Queue {
    constructor(){
        this.items = []
    }
    enqueue(data){
        this.items.push(data)
    }
    dequeue(){
        if(!this.items.length) return null
        const sliced = this.items[0]
        this.items.shift()
        return sliced
    }
    front(){
        if(!this.items.length) return null
        return this.items[0]
    }
    isEmpty(){
        return !this.items.length
    }
    size(){
        return this.items.length
    }
}
const queue = new Queue()
queue.enqueue(6)
queue.enqueue(7)
queue.dequeue()
console.log(queue.size())