const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = []; 

const createTeam = () => {
    inquirer.prompt([
        //prompt options
    ]).then(choice => {
        switch(choice.memberType) {
            case "Engineer":
                createEngineer();
                break; 
            case "intern":
                createIntern();
                break;
            default:
                buildTeam(); 
        }
    }); 
}


const init = () => {
    createManager(); 
}

const createManager = () => {
    inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: "What is the Manager's name?"
        },
        { 
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID?" 
        },
        { 
            type: 'input',
            name: 'email',
            message: "What is the Manager's email address?" 
        },
        { 
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?" 
        }

    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        createTeam(); 
    }); 
}

const createEngineer = () => {
    inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?" 
        },
        { 
            type: 'input',
            name: 'id',
            message: "What is the Engineer's ID?" 
        }, 
        { 
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email address?" 
        }, 
        { 
            type: 'input',
            name: 'githubName',
            message: "What is the Engineer's GitHub username?" 
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubName); 
        teamMembers.push(engineer);
        createTeam(); 
    });
}

const createIntern = () => {
    inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?" 
        }, 
        { 
            type: 'input',
            name: 'id',
            message: "What is the Intern's ID?" 
        },
        { 
            type: 'input',
            name: 'email',
            message: "What is the Intern's email address?" 
        }, 
        { 
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?" 
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school); 
        teamMembers.push(intern);
        createTeam(); 
    })
}

const buildTeam = () => {
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR); 
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8"); 
}

init(); 


// TODO: Write Code to gather information about the development team members, and render the HTML file.
//
//     * When a user enters those requirements then the user is presented with a menu with the option to:
//       * Add an engineer
//       * Add an intern 
//       * Finish building the team
