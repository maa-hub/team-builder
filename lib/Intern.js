const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, internSchool) {

        super(name, id, email);
        this.internSchool = internSchool;
    }    

    getInternSchool() {
        return this.internSchool;

    };

    getEmployeeRole() {
        return "Intern";
    }
};
module.exports = Intern;