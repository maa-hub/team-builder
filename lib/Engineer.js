const Employee = require("./Employee");


class Engineer extends Employee {
  constructor(name, id, email, githubName) {
    super(name, email, id);
    this.github = githubName;
  }
  getRole() {
    return "Engineer";
  }
  getGithubName() {
    return this.githubName;
  }
    
}

module.exports = Engineer;
