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
            name: "teamName",
            type: "list",
            message: "What team member are you adding?",
            choices: ['Manager', 'Engineer', 'Intern', 'No more! there is too many']
        }
    ]).then(myChoice => {
        switch(myChoice.teamName) {
            case 'Manager':
                managerQuestions();
                break;
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            case 'No more! there is too many':
                print();
                break;
        }
    });
};

function managerQuestions() {
    inquirer.prompt([
        {
            name: "managerName",
            type: "input",
            message: "What's the manager's name again?"
        },

        {
            name: "managerId",
            type: "input",
            message: "What's the manager's ID?"
        },

        {
            name: "managerEmail",
            type: "input",
            message: "What is your Manager's email?",
        },

        {
            name: "officeNumber",
            type: "input",
            message: "What's your managers office number"
        },
    ]).then((myInput) => {
        var manager = new Manager (myInput.managerName, myInput.managerId, myInput.managerEmail, myInput.officeNumber);
        myTeamArray.push(manager);
        startPrompt();
    })
};

function engineerQuestions() {
    inquirer.prompt([
        {
            name: "engineerName",
            type: "input",
            message: "What's your engineer's name?"
        },

        {
            name: "engineerId",
            type: "input",
            message: "What's your Engineer's id number?"
        },

        {
            name: "engineerEmail",
            type: "input",
            message: "What's your Engineer's email address?"
        },

        {
            name: "engineerGithub",
            type: "input",
            message: "What is the team Engineer's GitHub?",
        },

    ]).then((myInput) => {
        var engineer = new Engineer (myInput.engineerName, myInput.engineerId, myInput.engineerEmail, myInput.engineerGithub);
        myTeamArray.push(engineer);
        startPrompt();
    })
};

function askInternQuestion() {
    inquirer.prompt([
      {
            name: "internName",
            type: "input",
            message: "What's your intern's name?"
      },

      {
            name: "internId",
            type: "input",
            message: "What's your intern's id number?"
      },

      {
            name: "internEmail",
            type: "input",
            message: "What's your intern's email?",
      },

      {
            name: "internSchool",
            type: "input",
            message: "What school is your intern currently attending?"
      },

    ]).then((myInput) => {
      var intern = new Intern (myInput.internName, myInput.internId, myInput.internEmail, myInput.internSchool);
      myTeamArray.push(intern);
      startPrompt();
    })
};

const print = () => {

    let html = generateHTML(myTeamArray);
        htmlAsync('./_dist_/index.html', html)
        .then(() => console.log('HTML written, you are good to go'))
        .catch((err) => console.error(err));
  }
  
  // Runs application
  const init = () => {
  
    startPrompt();
        
    };
    
    init();