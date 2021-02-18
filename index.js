// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs")
const mgmtMarkdown = require("./utils/mgmtCard")
const engineerMarkdown = require("./utils/engineerCard")
const internMarkdown = require("./utils/internCard")
const path = require('path');
const mgmtQuestions = require("./mgmtQuestions");
const Manager = require("./LID/Manager");
const Intern = require("./LID/Intern");
const Engineer = require("./LID/Engineer");

let teamArr = []


function writeToFile(fileName, data) {
    //                pathing to certain file.  cwd is current working directory, so we're pathing into our cwd.  fileName is what we pass into the function as well as the data
        fs.writeFileSync(path.join(process.cwd(), fileName),data, (err) =>
        err ? console.error(err) : console.log("Success!")
        )
        // fs.writeFileSync("TeamProfile.html", teamArr, (err) =>
        // err ? console.error(err) : console.log("Success!")
        // )
    }

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

    ]).then ((data) => {
        const manager = new Manager(data.name, data.ID, data.email, data.office )
        
        teamArr.push(manager)        
        // writeToFile("TeamProfile.html", mgmtMarkdown(data))
        //function which type of team member to add?  this quesetion will be a function of its own
        nextMember()
    })
}

function nextMember () {
    inquirer.prompt([
        {
            type: "list",
            name: "name",
            message: "Would you like to add an engineer or intern?",
            choices: ["Engineer", "Intern", "I am finished"]
        },

    ]).then ((data) => {


        if (data.name === "Engineer") {
            engineer()
        } else if (data.name === "Intern") {
            intern()
        } else {
            console.log(teamArr)
            console.log(teamArr[0])
            console.log(teamArr[0].value)
            // writeToFile()
            // teamArr.forEach(writeToFile("TeamProfile.html", mgmtMarkdown(current)))

            teamArr.map()

            for (let i = 1; i < teamArr.length; i++) {
                let temp = i
                
                if (data.name === "Manager") {
                    writeToFile("TeamProfile.html", mgmtMarkdown(teamArr[temp]))
                }else if (data.name === "Engineer") {
                    writeToFile("TeamProfile.html", engineerMarkdown(teamArr[temp]))
                } else {
                    writeToFile("TeamProfile.html", internMarkdown(teamArr[temp]))
                }
                
                console.log("what the fuck")
            }

            // fs.writeFileSync("TeamProfile.html", mgmtMarkdown(), (err) =>
            // err ? console.error(err) : console.log("Success!")


            // writeToFile("TeamProfile.html", mgmtMarkdown(data))
            
        }
})
}


function engineer() {
    inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Engineer's name?"
            },
            {
                type: "input",
                name: "ID",
                message: "What is the Engineers's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Engineer's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the Engineer's GitHub user name?"
            },

                //data is all of the answers from above responses
    ]).then ((data) => {
        const engineer = new Engineer(data.name, data.ID, data.email, data.github )
        //create global array and push to array 
        teamArr.push(engineer)
        nextMember()
    })
}


function intern() {
    inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Intern's name?",
                default: "Rob Thomas - Matchbox Ma'Fuckin 20 BIOTCH"
            },
            {
                type: "input",
                name: "ID",
                message: "What is the Intern's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the Intern's current school?"
            },

                //data is all of the answers from above responses
    ]).then ((data) => {
        const intern = new Intern(data.name, data.ID, data.email, data.school )
        //create global array and push to array 
        teamArr.push(intern)
        nextMember()
    })
}

// Function call to initialize app
init()

