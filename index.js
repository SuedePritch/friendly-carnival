// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is your Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your Description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter Table of Contents',
        name: 'tableOfContents',
    },
    {
        type: 'input',
        message: 'Installation Instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is your Usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is your License?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contributing?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How do you run Tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Any Questions?',
        name: 'questions',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, 
`# ${data.title}\n
## Description\n
${data.description}\n
## Table of Contents
${data.tableOfContents}\n
## Installation Instructions\n
${data.installation}
## Usage\n
${data.usage}\n
License ${data.license}\n
## Contributors\n
${data.contributing}\n
## Tests\n
${data.tests}\n
## Questions\n
${data.questions}\n
`, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
);

}

// TODO: Create a function to initialize app

function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile("README.md", response));
  

}

// Function call to initialize app
init();