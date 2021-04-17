const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const util = require('util');

const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');

const generateHTML = require('./src/generateHTML');

let myTeamArray = [];

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
        })
}