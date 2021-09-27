const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const githubName = "maa-hub";
    const employee = new Engineer("Maame", 1, "maame@gmail.com", githubName);
    expect(employee.githubName).toBe(githubName);
  });

  test("getEmployeeRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Maame", 1, "maame@gmail.com", "maa-hub");
    expect(employee.getEmployeeRole()).toBe(role);
  });