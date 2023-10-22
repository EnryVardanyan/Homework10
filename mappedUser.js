class Users{
    constructor(data){
        this.maped = new Map()
        data.forEach.addUser(user => this.addUser(user))
    }
    addUser(user){
        this.maped.set(user.id, user)
    }

}