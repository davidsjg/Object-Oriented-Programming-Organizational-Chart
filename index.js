// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const mgmtMarkdown = require("./utils/mgmtCard")
const mgmtQuestions = require("./mgmtQuestions")
const path = require('path');


function writeToFile(fileName, data) {
    //                pathing to certain file.  cwd is current working directory, so we're pathing into our cwd.  fileName is what we pass into the function as well as the data
        fs.writeFileSync(path.join(process.cwd(), fileName),data, (err) =>
        err ? console.error(err) : console.log("Success!")
        )
    }

function init() {
    inquirer.prompt([

    mgmtQuestions()

    // ]).then ((data) => {
    //     writeToFile("TeamProfile.html", mgmtMarkdown(data))
    // })
])
}


// Function call to initialize app
init()

