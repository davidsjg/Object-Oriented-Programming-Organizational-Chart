// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const mgmtMarkdown = require("./utils/mgmtCard")
const generateCard = require("./utils/mgmtCard")

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "ID",
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

// Function call to initialize app
init()

