// const mgmtQuestions = require('../mgmtQuestions');
 
const { expect } = require("@jest/globals")
const { eventNames } = require("process")
const Employee = require("../LID/Employee")

test ("can create a employee object", () => {
  let employee = new Employee()
  expect(typeof(employee)).toBe("object")
})

test ("can enter employee name", () => {
  let name = "Joey"
  let employee = new Employee(name)
  expect(employee.name).toBe(name)
})


test ("can enter employee ID", () => {
  let name = "Joey"
  let id = 50
  let employee = new Employee(name, id)
  expect(employee.id).toBe(id)
})

test ("can enter employee email", () => {
  let name = "Joey"
  let id = 50
  let email = "j.davidson18@gmail.com"
  let employee = new Employee(name, id, email)
  expect(employee.email).toBe(email)
})




















// describe('mgmtQuestions', () => {

//   describe("name", () => {
//     it('should return a string', () => {
//       //how do i test this without running inquirer?
//       //what am i testing?  i'm testing that the input from the user is a string
//       //take the input and compare it against 'string'
//       expect().toBe();
//     });

//   describe("identification", () => {
//     it('should return a number', () => {
//       expect().toBe();
//     });
//   });


//   // “A special character cannot appear as the first or last character in an email address or appear consecutively two or more times. The most commonly used special characters are the period (.), underscore(_), hyphen (-) and plus sign (+).
//   // Alternative special characters such as  " ( ) , : ; < > @ [ \ ] “
//   describe("email", () => {
//     it('should return a valid email.', () => {
//       expect().toBe();
//     });
//   });

// })
// })
