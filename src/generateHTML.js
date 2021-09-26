// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getEmployeeName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getEmployeeRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getEmployeeId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmployeeEmail()}">${manager.getEmployeeEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getEmployeeName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getEmployeeRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getEmployeeId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmployeeEmail()}">${engineer.getEmployeeEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithubName()}" target="_blank" rel="noopener noreferrer">${engineer.getGithubName()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getEmployeeName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getEmployeeRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getEmployeeId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmployeeEmail()}">${intern.getEmployeeEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getInternSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getEmployeeRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getEmployeeRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getEmployeeRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};