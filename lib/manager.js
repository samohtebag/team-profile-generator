const Employee = require('./employee');

class Manager extends Employee {
    // using extend to fill in fields from Employee
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // adding officeNumber for Manager
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;