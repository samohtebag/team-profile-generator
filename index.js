const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const util = require('util');

const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');

const generateHTML = require('./src/generateHTML');

let myTeamArray = [];

const htmlAsync = util.promisify(fs.writeFile);

function startPrompt() {
    inquirer.prompt([
        {
            name: "teamname",
            message: "Pick a name for your team"
        }
    ])
        .then(function(data){
            const myTeamName = data.teamname;
            myTeamArray.push(myTeamName)
            addManager();
        })
}

function addMyManager() {
    inquirer.prompt([
        {
            name: "name",
            message: "what is your manager's name?"
        },
        
        {
            name: "email",
            message: "what is your manager's email?"
        },

        {
            name: "officeNumber",
            type: "number",
            message: "what is your managers office number?"
        },
    ])

    .then(function(data) {
        const name = data.name;
        const id = 1;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const teamMember = new Manager(name, id, email, officeNumber)
        myTeamArray.push(teamMember);
        addMyTeam();
    });
}

function addMyTeam() {
    inquirer.prompt([
        {
            name: "memberData",
            type: "list",
            message: "add some peeps to your team!",
            choices: ["Add an Engineer!", "Add an Intern!", "No more! There's just too many!"]
        }
    ])
        .then(function(data){
            switch(data.memberData) {
                case "Add an Engineer!":
                    addEngineer();
                    break;
                case "Add an Intern!":
                    addIntern();
                    break;
                case "No more! There's just too many!":
                    completedTeam();
                    break
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            name: "name",
            message: "What's your new engineer's name?"
        },

        {
            name: "email",
            message: "What's this new engineer's email address?"
        },

        {
            name: "github",
            message: "What's this engineer's Github username?"
        }
    ])

        .then(function(data) {
            const name = data.name;
            const id = myTeamArray.length + 1;
            const email = data.email;
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            myTeamArray.push(teamMember)
            addMyTeam();
        });
}

function addIntern() {
    inquirer.prompt([
        {
            name: "name",
            message: "What's the new intern's name?"

        },

        {
            name: "email",
            message: "What's this new intern's email address?"

        },

        {
            name: "school",
            message: "I forget, where did this new intern go to school?"

        }
    ])

        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            finalTeamArray.push(teamMember)
            addTeamMembers()
    });
}

const print = () => {

    let html = generateHTML(myTeamArray);
        htmlAsync('./dist/index.html', html)
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
  }
  

startPrompt()

const init = () => {

    addMyTeam();
      
  };
  
  init();