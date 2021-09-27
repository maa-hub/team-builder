const Employee = require("../lib/Employee");

test("Ability to set name using constructor function", () => {
    const name = "Maame";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Ability to set the user ID using constructor function", () => {
    const id = "1";
    const employee = new Employee("Maame", id, "maame@gmail.com");
    expect(employee.id).toBe(id);
  });

test("Running getEmployeeEmail() should return the supplied email", () => {
    const email = "maame@gmail.com";
    const employee = new Employee("Maame", 1, email);
    expect(employee.getEmployeeEmail()).toBe(email);
  });

test("Running getEmployeeRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("Maame", 1, "maame@gmail.com");
    expect(employee.getEmployeeRole()).toBe(role);
  });