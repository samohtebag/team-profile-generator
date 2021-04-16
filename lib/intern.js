const Employee = require('./employee');

class Intern extends Employee {
// using extend to fill in fields from Employee
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
// adding school for intern
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;