const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const internSchool = "Rutgers School";
    const employee = new Intern("Maame", 1, "maame@gmail.com", internSchool);
    expect(employee.internSchool).toBe(internSchool);
  });

  test("getEmployeeRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Maame", 1, "maame@gmail.com", "maa-hub");
    expect(employee.getEmployeeRole()).toBe(role);
  });