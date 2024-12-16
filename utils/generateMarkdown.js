// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  
  if (license === "MIT") {
  let badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  return badge;
}
else if (license === "Apache License 2.0") {
  let badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  return badge;
}
else if (license === "The Unlicense") {
  let badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  return badge;
}
else (license === "")
  return ""
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    let link = "(https://opensource.org/licenses/MIT)";
    return link;
  }
  else if (license === "Apache License 2.0") {
    let link = "(https://opensource.org/licenses/Apache-2.0)"
    return link;
  }
  else if (license === "The Unlicense") {
    let link = "(http://unlicense.org/)"
    return link;
  }
  else (license === "")
    return ""
  };


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license);
  let licenseName = license;

  return `The application is covered under [${licenseName}](${licenseLink}).  
  ${licenseLink}
  `

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
  ${data.description}

## Table of Contents
  1. [Installation Guide](#installation-guide)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Questions](#questions)

## Installation Guide
  ${data.install}

## Usage 
  ${data.usage}

## Contributing
  ${data.guidelines}

## Tests
  ${data.test}

## License
  ${renderLicenseSection(data.license)}

## Questions
  - ${data.github}
  - You can reach me at ${data.email}
`;
}

export default generateMarkdown;
