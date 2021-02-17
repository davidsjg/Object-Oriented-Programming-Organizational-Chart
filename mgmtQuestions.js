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

function mgmtQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "identification",
            message: "What is the team manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the team manager's office number?"
        },

            //data is all of the answers from above responses
    ]).then ((data) => {
        writeToFile("TeamProfile.html", mgmtMarkdown(data))
    })
}



module.exports = mgmtQuestions;