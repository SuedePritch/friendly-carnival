let licenseBadge;
let licenseSection;
let tableOfContents = [];


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
  }else if(data.license === 'Apache License 2.0'){
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }else if(data.license === 'MIT License'){
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if(data.license === 'Boost Software License 1.0'){
    licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }else if(data.license === 'The Unlicense'){
    licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }else{
    licenseBadge = null
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //this is built into the badge
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license){
    licenseSection = 
`
## License
 This project is covered by the ${data.license} License\n
${licenseBadge}\n

---
`
  }else{
    licenseSection = ' '
  }
}
// [go to heading](#heading)
function generateTableOfContents(data){
  for(i = 0; i < data.tableOfContents.length; i++){
  tableOfContents.push(`[${data.tableOfContents[i]}](#${data.tableOfContents[i]})`)
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data)
  renderLicenseSection(data)
  generateTableOfContents(data)
return `
# ${data.title}\n

---

${licenseSection}\n
## Description\n
* ${data.description}\n

---

## Table of Contents

* ${tableOfContents.join(`\n* `)}\n

---

## Installation\n
    ${data.installation}

---

## Usage\n
* ${data.usage}\n

---

## Contributors\n
* ${data.contributing}\n

---

## Tests\n
    ${data.tests}\n

---

## Questions\n

[Github Page](https://www.github.com/${data.github})\n

[Questions or Comments by Email](mailto:${data.email})\n

---

`;
}

module.exports = generateMarkdown;
