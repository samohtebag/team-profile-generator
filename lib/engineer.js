const Employee = require('./employee');

class Engineer extends Employee {
    // using extend to fill in fields from Employee
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // adding github for engineer
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    } 
}

module.exports = Engineer;