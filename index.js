// TODO: Include packages needed for this application

const fs = require("fs")
const mgmtMarkdown = require("./utils/mgmtCard")
const path = require('path');
const mgmtQuestions = require("./mgmtQuestions");


function writeToFile(fileName, data) {
    //                pathing to certain file.  cwd is current working directory, so we're pathing into our cwd.  fileName is what we pass into the function as well as the data
        fs.writeFileSync(path.join(process.cwd(), fileName),data, (err) =>
        err ? console.error(err) : console.log("Success!")
        )
    }

function init() {

    let mgmtQues = mgmtQuestions()
    
}

// Function call to initialize app
init()

// function init() {
//     inquirer.prompt([
//             {
//                 type: "input",
//                 name: "name",
//                 message: "What is the team manager's name?"
//             },
//             {
//                 type: "input",
//                 name: "ID",
//                 message: "What is the team manager's ID?"
//             },
//             {
//                 type: "input",
//                 name: "email",
//                 message: "What is the team manager's email?"
//             },
//             {
//                 type: "input",
//                 name: "office",
//                 message: "What is the team manager's office number?"
//             },

//                 //data is all of the answers from above responses
//     ]).then ((data) => {
//         writeToFile("TeamProfile.html", mgmtMarkdown(data))
//     })
// }

// // Function call to initialize app
// init()

