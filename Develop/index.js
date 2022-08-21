// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Enter project description:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter installation information:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Enter contribution guidelines:',
        name: 'contibution',
      },
      {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'test',
      },
      {
        type: 'list',
        message: 'What is the license for your application?',
        choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
        name: 'license',
        default: 'MIT'
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Enter email address:',
        name: 'email',
      },
    ]).then((data) => {     
      const fileName = data.title.trim().split(" ").join("_");           
      const md = generateMarkdown(data) 
     fs.writeFile(`${fileName}.md`, md, err => { 
         err ? console.log(err): console.log("Success!")
        })
      }
      );
    

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

