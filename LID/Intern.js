const Employee = require("./Employee")

class Intern extends Employee {

    constructor (name, id, email, school){
        //grabs all of the methods and this.name, etc. 
        super(name, id, email)
        this.school = school

    }

    school () {
        return this.school
    }
    getRole () {
        return "Intern"
    }
}

module.exports = Intern