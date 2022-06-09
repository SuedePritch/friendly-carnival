// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
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
    // {
    //     type: 'input',
    //     message: 'Enter Table of Contents',
    //     name: 'tableOfContents',
    // },
    // {
    //     type: 'input',
    //     message: 'Installation Instructions',
    //     name: 'installation',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your Usage?',
    //     name: 'usage',
    // },
    {
        type: 'rawlist',
        message: 'What is your License?',
        name: 'license',
        choices: ['GNU AGPLv3','GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense']
    },
    // {
    //     type: 'input',
    //     message: 'Contributing?',
    //     name: 'contributing',
    // },
    // {
    //     type: 'input',
    //     message: 'How do you run Tests?',
    //     name: 'tests',
    // },
    // {
    //     type: 'input',
    //     message: 'Any Questions?',
    //     name: 'questions',
    // },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
);

}

// TODO: Create a function to initialize app

function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('README.md' ,generateMarkdown(response)));


}

// Function call to initialize app
init();