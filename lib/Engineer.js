const Employee = require("./Employee");


class Engineer extends Employee {
  constructor(name, id, email, githubName) {
    super(name, email, id);
    this.githubName = githubName;
  }
  getEmployeeRole() {
    return "Engineer";
  }
  getGithubName() {
    return this.githubName;
  }
    
}
module.exports = Engineer;
