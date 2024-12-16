// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        message: 'Give your README.md a title!',
        name: 'title',
    },
    {
        type: 'input', 
        message: 'Describe your project!',
        name: 'description',
    },
    {
        type: 'input', 
        message: 'How can the end-user install this project?',
        name: 'install',
    },
    {
        type: 'input', 
        message: 'What is the intended use of this application?',
        name: 'usage',
    },
    {
        type: 'input', 
        message: 'What are your contribution guidelines for this app?',
        name: 'guidelines',
    },
    {
        type: 'input', 
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name: 'test',
    },
    {
        type: 'list', 
        message: 'What license would you like to use?',
        name: 'license',
        choices: [ 'MIT', 'Apache License 2.0', 'The Unlicense']
    },
    {
        type: 'input', 
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input', 
        message: 'What is your email?',
        name: 'email',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.mkdir("./Generated README", {recursive: true}, (err) => console.log(err))
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Success! You have created a professional README!'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer 
        .prompt(questions)
        .then((response) => {
            const markdownData = generateMarkdown(response);
            writeToFile('./Generated README/README.md', markdownData);
        })
        .catch((error) => console.log(error));
}

// Function call to initialize app
init();
