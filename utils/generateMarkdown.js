let licenseBadge;


//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#eclipse-public-license-10
function renderLicenseBadge(data) {
  if(data.license === 'GNU AGPLv3'){
    licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }else if(data.license === 'GNU GPLv3'){
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }else if(data.license === 'GNU LGPLv3'){
    licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  }else if(data.license === 'Mozilla Public License 2.0'){
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }else if(data.license === 'MIT License'){
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if(data.license === 'Boost Software License 1.0'){
    licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }else if(data.license === 'The Unlicense'){
    licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }else{
    licenseBadge = ''
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data)
return `
# ${data.title}
${licenseBadge}\n
## Description\n
${data.description}\n
## Table of Contents
${data.tableOfContents}\n
## Installation Instructions\n
${data.installation}
## Usage\n
${data.usage}\n
## Contributors\n
${data.contributing}\n
## Tests\n
${data.tests}\n
## Questions\n
${data.questions}\n
`;5
}

module.exports = generateMarkdown;
