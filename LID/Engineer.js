const Employee = require("./Employee")

class Engineer extends Employee {

    constructor (name, id, email, gitHub){
        //grabs all of the methods and this.name, etc. 
        super(name, id, email)
        this.gitHub = gitHub

    }

    gitHub () {
        return this.gitHub
    }
    getRole () {
        return "Engineer"
    }
}

module.exports = Engineer