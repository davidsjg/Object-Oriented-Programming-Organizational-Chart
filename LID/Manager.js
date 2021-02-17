const Employee = require("./Employee")

class Manager extends Employee {

    constructor (name, id, email, office){
        //grabs all of the methods and this.name, etc. 
        super(name, id, email)
        this.office = office

    }

    office () {
        return this.office
    }
    getRole () {
        return "Manager"
    }
}

module.exports = Manager