// Creating the necessary variables for the Inquirer and FS packages
const inquirer = require('inquirer'); 
const fs = requier('fs');
// Variables created to grab info from class js files

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const addEmployee = [];

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'Hello! What is your name?',
            name: 'name',
            
        },

        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'list',
            message: 'What is your current position?',
            choices: ['Engineer', 'Manager', 'Intern'],
            name: 'role'
        },

    ]
)