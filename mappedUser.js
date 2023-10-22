class Users{
    constructor(data){
        this.maped = new Map()
        data.forEach(user => this.addUser(user))
    }
    addUser(user){
        this.maped.set(user.id, user)
    }
    getUserById(id){
       return this.maped.get(id)
    }

}
const mappedUser = new Users([ 
    { id: 1, name: "Alice", email: "alice@example.com" }, 
    { id: 2, name: "Bob", email: "bob@example.com" }, 
  ])
  console.log(mappedUser.getUserById(3))
  mappedUser.addUser({id: 3, name: "Hakobik", email: "hakobik@rambler.ru"})
  console.log(mappedUser)