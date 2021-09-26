const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./src/generateHTML.js");

const fileDirectory = path.resolve(__dirname, "fileoutput");
const filePath = path.join(OUTPUT_DIR, "index.html");

// Employee array
let employeesArr = [];

const questions = [           
    {
        type: "input",
        name: "name",
        message: "What is the the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What role does this employee have?",
        choices: ["Manager", "Engineer", "Intern"]
    }
    ]

    managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)",
            validate: officeNumber => {
                if (officeNumber) {
                  return true;
                } else {
                  console.log("Please enter an office number!");
                  return false;
                }
              }
        }
    ]

    engineerQuestions = [
        {
            type: "input",
            name: "githubName",
            message: "What is the engineer's Github Username? (Required)",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  console.log("Please enter a GitHub username!");
                  return false;
                }
              }
        }
    ]

    internQuestions = [

        {
            type: "input",
            name: "InterSchool",
            message: "What school is the intern from? (Required)",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log("Please enter a school name!");
                  return false;
                }
              }
        }
    ]

  
    const init = () => {
        if (fs.existsSync(filePath)) {
            inquirer.prompt({
                type: "confirm",
                message: "The index.html file already exists. Overwrite?",
                name: "overwrite"
            }).then(async (response) => {
    
                let overwrite = response.overwrite;
                if (await overwrite === true) {
                    console.log("Please build your team:")
                    newEmployee()
                } else if (await overwrite === false) {
                    console.log("no overwriting")
                }
            })
        } else {
            console.log("Welcome to the team profile generator. Please enter your team information below:")
            newEmployee()
        }
    };   

   
    const newEmployee = async () => {
        await inquirer.prompt(questions)
          .then((response) => {
            let name = response.name;
            let id = response.id;
            let email = response.email;
            let role = response.role;
            let officeNumber;
            let githubName;
            let internSchool;

            if (role === "Engineer") {
            inquirer.prompt(engineerQuestions).then((response) =>{
                github = response.githubName;
                let employee = new Engineer(name, id, email, githubName);
                employeesArr.push(employee);
                addEmployee(employeesArr);
                });
            }

            else if (role === "Intern") {
                inquirer.prompt(internQuestions).then((response) =>{
                        school = response.school;
                        let employee = new Intern(name, id, email, internSchool);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
            }

            else if (role === "Manager") {
                inquirer.prompt(managerQuestions).then((response) =>{
                        officeNumber = response.officeNumber;
                        let employee = new Manager(name, id, email, officeNumber);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
                }
        });    
    
    };

    const addEmployee = async (array) => {
       await inquirer
        .prompt({
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an employee? (Required)"

        }).then(async (response) => {
            var createEmployee = response.addEmployee;
            if (await createEmployee === true) {
                newEmployee();
            } 
            else if (await createEmployee === false) {
            if (!fs.existsSync(fileDirectory)) {
                fs.mkdirSync(fileDirectory)
            }
            
            fs.writeFile(filePath, renderHTML(array), (err) => {
        
                if (err) {
                    return console.log(err);
                }
            
                console.log("Your index.html file has been created");
            });

        }
    })
};
   
    init();