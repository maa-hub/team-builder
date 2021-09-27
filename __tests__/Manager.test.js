const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "1234";
    const employee = new Manager("Maame", 1, "maame@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getEmployeeRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Maame", 1, "maame@gmail.com", "maa-hub");
    expect(employee.getEmployeeRole()).toBe(role);
  });