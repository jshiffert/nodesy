// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["Enter a title: ",
"Enter a description of the project: ",
"Enter installation instructions: ",
"Enter the usage information: ",
"Choose a license for this application: ",
"Enter contribution guidelines: ",
"Enter test instructions: ",
"Enter your GitHub username: ",
"Enter your email address"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var title = `# ${data.title}\n`;
    // console.log(title);
    // var markdownTest = '\nthis is some text \nthis is a new line';
    var contents = '## Table of Contents\n[Description](#description)<br/>[Installation](#installation)<br/>'+
    '[Usage](#usage)<br/>[License](#license)<br/>[Contributing](#contributing)<br/>'+
    '[Tests](#tests)<br/>[Questions](#questions)\n';

    var desc = `## Description\n${data.description}\n`;
    var install = `## Installation\n${data.installation}\n`;
    var usage = `## Usage\n${data.usage}\n`;
    var contr = `## Contributing\n${data.contribution}\n`;
    var test = `## Tests\n${data.test}\n`;


    var page = title+desc+contents+install+usage+contr+test

    fs.writeFile(fileName, (page), (err) =>
        err ? console.log(err) : console.log('Success')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            // {
            //     type: 'list',
            //     name: 'license',
            //     message: questions[4],
            //     choices: ['Apache License v2.0','GNU General Public License v3.0','MIT License'],
            // },
            {
                type: 'input',
                name: 'contribution',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'test',
                message: questions[6],
            },
            // {
            //     type: 'input',
            //     name: 'username',
            //     message: questions[7],
            // },
            // {
            //     type: 'input',
            //     name: 'email',
            //     message: questions[8],
            // },
        ])
        .then((data) => {
            const filename = `${data.title.split(' ').join('')}.md`;

            writeToFile(filename, data);
        });
};

// Function call to initialize app
init();