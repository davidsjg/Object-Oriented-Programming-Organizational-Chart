const fs = require("fs")
const index = require("./index")
const inquirer = require("inquirer")
const mgmtMarkdown = require("./utils/mgmtCard")
const path = require('path');

function writeToFile(fileName, data) {
    //                pathing to certain file.  cwd is current working directory, so we're pathing into our cwd.  fileName is what we pass into the function as well as the data
        fs.writeFileSync(path.join(process.cwd(), fileName),data, (err) =>
        err ? console.error(err) : console.log("Success!")
        )
    }

function Manager() {}

function mgmtQuestions (){

Manager.prototype.question1 = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
    ]).then ((data) => {
        writeToFile("TeamProfile.html", mgmtMarkdown(data)) 
    })
}

Manager.prototype.question2 = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "identification",
            message: "What is the team manager's ID?"
        },
    ]).then ((data) => {
        writeToFile("TeamProfile.html", mgmtMarkdown(data))
    })
}

Manager.prototype.question3 = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?"
        },
    ]).then ((data) => {
        writeToFile("TeamProfile.html", mgmtMarkdown(data))
    })
}

Manager.prototype.question4 = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "office",
            message: "What is the team manager's office number?"
        },
    ]).then ((data) => {
        writeToFile("TeamProfile.html", mgmtMarkdown(data))
    })
}
}   





module.exports = mgmtQuestions;