// TODO: Include packages needed for this application

const fs = require("fs")
const mgmtMarkdown = require("./utils/mgmtCard")
const path = require('path');
const mgmtQuestions = require("./mgmtQuestions");
const manager = require("./manager")


// function writeToFile(fileName, data) {
//     //                pathing to certain file.  cwd is current working directory, so we're pathing into our cwd.  fileName is what we pass into the function as well as the data
//         fs.writeFileSync(path.join(process.cwd(), fileName),data, (err) =>
//         err ? console.error(err) : console.log("Success!")
//         )
//     }

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
        const manager = new Manager(data.name, data.ID, data.email, data.office )
        
        
        writeToFile("TeamProfile.html", mgmtMarkdown(data))
        //function which type of team member to add?  this quesetion will be a function of its own
    })
}

//add the inquirer questions 
function engineer() {
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
        const engineer = new Engineer(data.name, data.ID, data.email, data.office )
        //create global array and push to array 
        
        writeToFile("TeamProfile.html", mgmtMarkdown(data))
        //function which type of team member to add?  this quesetion will be a function of its own
    })
}

// Function call to initialize app
init()

