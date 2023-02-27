// Creating the necessary variables for the Inquirer and FS packages
const inquirer = require('inquirer'); 
const fs = require('fs');



// Variables created to grab info from class  files
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//file used to generate HTML page from information input
const generateHTML = require('./dist/generateHTML');


const addEmployee = [];
// Prompts for employee info in terminal
const questions = async() => {
    const answers = await 
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'Hello! What is your name?',
            name: 'name',
            
        },
        {
            type: 'list',
            message: 'What is your current position?',
            choices: ['Engineer', 'Manager', 'Intern'],
            name: 'role'
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
      
    ]
)
// Additional questions for employee under Manger role
if (answers.role === 'Manager') {
    const managerPrompt = await 
    inquirer.prompt(
            {
            type: 'input',
            message: 'What is your office number?',
            name:'office'
             },

            );
// gather responses for manager role and push to employee array
    const assignManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.role,
        managerPrompt.office,
    )
    addEmployee.push(assignManager);
}else if(answers.role === 'Engineer'){
    const engineerPrompt = await
    inquirer.prompt(
        {
            type: 'input',
            message: 'Please provide your GitHub profile',
            name: 'github'
        }
    );
    const assignEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.role,
        engineerPrompt.github
    )
    addEmployee.push(assignEngineer);
}else if(answers.role === 'Intern'){
    const internPrompt = await
    inquirer.prompt(
        {
            type: 'input',
            message: 'What institution are you attending?',
            name: 'school'
        }
    );
    const assignIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.role,
        internPrompt.school
    )
    addEmployee.push(assignIntern);
}
}

// Here the user will be prompted to either finish and generate their team or to continue adding more memebers
async function employeePrompts() {
await questions()

const makeTeam = 
await inquirer.prompt([
    {
        type:'list',
        message: 'Do you want to add a new member or generate your team?',
        choices: ['Add another member', 'Generate team'],
        name: 'team'
        
    }
])
if (makeTeam.team === 'Add another member'){
    return employeePrompts()
}else{
    return teamCreation();
}
};
// Call the employee prompt function to run 
employeePrompts();

// code to use the inputs and generate the html page
function teamCreation() {
console.log('Welcome New Employee!', addEmployee)
fs.writeFileSync(
    "./dist/index.html",
    generateHTML.makeTeam(addEmployee),
    "utf-8"
    )
};
