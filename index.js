// Packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
//Imported modules
const generateMarkdown = require('./utils/generateMarkdown')
const questions = require('./data/questions')

// Create README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README generated')
);
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => writeToFile('README.md' ,generateMarkdown(response)));
}
init();