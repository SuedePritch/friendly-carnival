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
        type: 'checkbox',
        message: 'Enter Table of Contents',
        name: 'tableOfContents',
        choices: ['installation', 'usage', 'contributors', 'tests', 'questions']
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
        type: 'rawlist',
        message: 'What is your License?',
        name: 'license',
        choices: ['','GNU AGPLv3','GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense']
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
        message: 'Github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'enter email',
        name: 'email',
    },
    
];

module.exports = questions