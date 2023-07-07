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

    var contents = '## Table of Contents\n[Description](#description)<br/>[Installation](#installation)<br/>'+
    '[Usage](#usage)<br/>[License](#license)<br/>[Contributing](#contributing)<br/>'+
    '[Tests](#tests)<br/>[Questions](#questions)\n';

    var desc = `## Description\n${data.description}\n`;
    var install = `## Installation\n${data.installation}\n`;
    var usage = `## Usage\n${data.usage}\n`;
    var contr = `## Contributing\n${data.contribution}\n`;
    var test = `## Tests\n${data.test}\n`;

    var liResponse = data.license;

    if (liResponse == 'Apache License v2.0') {
        var license = '## License\nThis project uses the Apache License v2.0.\n';
        var badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n';
    } else if (liResponse == 'GNU General Public License v3.0') {
        var license = '## License\nThis project usese the GNU General Public License v3.0.\n';
        var badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)\n';
    } else if (liResponse == 'MIT License') {
        var license = '## License\nThis project uses the MIT License.\n';
        var badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }

    var question = `## Questions\nIf you have any questions, feel free to email the creator by clicking on [this link](mailto:${data.email}).\n`+
    `To view more projects from this creator, view their GitHub profile here: [https://github.com/${data.username}](https://github.com/${data.username}).`

    var page = title+badge+desc+contents+install+usage+license+contr+test+question

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
            {
                type: 'list',
                name: 'license',
                message: questions[4],
                choices: ['Apache License v2.0','GNU General Public License v3.0','MIT License'],
            },
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
            {
                type: 'input',
                name: 'username',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
            },
        ])
        .then((data) => {
            const filename = `${data.title.split(' ').join('')}.md`;

            writeToFile(filename, data);
        });
};

// Function call to initialize app
init();