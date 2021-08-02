// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message:
      "Give your project a Title. This should be something that is descriptive of what the app does. ",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description of the project, use the following as guides: What was your motivation? Why is this useful? What problem does it solve?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the required steps to install the project?",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions and examples.",
  },
  {
    type: "list",
    name: "license",
    message: "Which license do you want to use from the following:\n",
    choices: [
      "Apache 2.0",
      "BSD 2-Clause",
      "BSD 3-Clause",
      "LGPL-3.0",
      "MIT",
      "Mozilla Public 2.0",
      "CDDL-1.0",
      "EPL-2.0",
    ],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions for the project, if any?",
  },
  {
    type: "input",
    name: "github",
    message:
      "What github do you want to use? Make sure to spell it correctly!",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    return error ? console.log(error) : console.log("Check out your README!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((res) => {
    writeToFile("./README example/README.md", generateMarkdown(res));
  });
}

// Function call to initialize app
init();
