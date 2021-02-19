Title: Object Oriented Programming Organizational Chart

Introduction: The goal of this application is to allow the user to build an organizational team chart based on command line interfacing. A list of prompts guides the user through the application, allowing them to create a manager and then add engineers or interns to the manager's team. Additionally, tests were written to ensure program functionality

Technologies: HTML, JavaScript, Bootstrap, Node, Inquirer, Jest

Launch: The application launches when 'node index.js' is entered into the terminal. To launch the test, 'npm test' is entered.

Scope of Functionalities: Once the application is launched in the terminal, a series of manager question prompts are displayed for the user. A Manager constructor function is built off of these answers. After the Manager is complete, the object of the manager is added to an array that will hold the entire team. The user is prompted to add an engineer or intern next. After an engineer or intern is entered, the engineer or intern is added to the team array, and the user will again be prompted if another engineer or intern would like to be added. If the user is done, there is a choice to stop adding to the team. Once this choice is selected, the array holding the team is added to an HTML set of cards. These cards are dynamically created inside of a pre-generated HTML using template literals. Once the cards are populated with the team array data on the page, the application is complete.

Potential Future Plans: Adding external links to the cards, such as LinkedIn.

Additional Notes: The final author of this application is Joey Davidson. He can be reached at j.davidson18@gmail.com

WEBSITE LAUNCH:
