const generateHTML = (teamMembers) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="https://bootswatch.com/4/sketchy/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css"
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="jumbotron" style="background-color: black;">
        <h1 class="display-3" style="color:orange; text-align: center;">My Crew!</h1>
        <p class="lead" style="color: orange; text-align: center;">This is some information for the people who work alongside you, day in and day out</p>
      </div>
    
    <div class="card-ctn">

        <div class="row">
    
        ${generateTeam(teamMembers)};

        </div>

        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>   
        <script src="/src/generateHTML.js"></script>   
    </body>
    </html> 
`
};

function generateTeam(teamMembers) {
    let html = ""
    teamMembers.forEach(member => {
        switch (member.getRole()) {
            case 'Intern':
                html += generateIntern(member)
                break;
            case 'Engineer':
                html += generateEngineer(member)
                break;
            case 'Manager':
                html += generateManager(member)
                break;
            default:
                break;
        }
    })
    return html;
};

const generateIntern = (intern) => {
    return `
    <div class="card bg-info mb-3" style="max-width: 20rem;">
    <div class="card-header" style="background-color: black;">
        <h2 style="color: orange;">${intern.getName()}</h2>
        <h4><i class="fas fa-user-graduate" style="color: orange;">${intern.getRole()}</i></h4>
    </div>
    <div class="card-body bg-light">
    <p class="card-text">
        <div class="list-group">
            <a href="" class="list-group-item list-group-item-action active"style="background-color: orange; color: black;">ID: ${intern.getId()}</a>
            <a href="mailto: coffeeboy@bigcorp.com" class="list-group-item list-group-item-action"style="background-color: orange; color: black;">Email: ${intern.getEmail()}</a>
            <a href="" class="list-group-item list-group-item-action disabled"style="background-color: orange; color: black;">School: ${intern.getSchool()}</a>
        </div>
    </p>
    </div>
</div>`
};

const generateEngineer = (engineer) => {
    return `
    <div class="row">
    <div class="card bg-info mb-3" style="max-width: 20rem;">
        <div class="card-header" style="background-color: black;">
            <h2 style="color: orange;">${engineer.getName()}</h2>
            <h4><i class="fas fa-glasses" style="color: orange;">${engineer.getRole()}</i></h4>
        </div>
        <div class="card-body bg-light">
        <p class="card-text">
            <div class="list-group">
                <a href="" class="list-group-item list-group-item-action active"style="background-color: orange; color: black;">ID: ${engineer.getId()}</a>
                <a href="mailto: internetlackey@bigcorp.com" class="list-group-item list-group-item-action"style="background-color: orange; color: black;">Email: ${engineer.getEmail()}</a>
                <a href="https://github.com/ITguru" target="_blank" class="list-group-item list-group-item-action"style="background-color: orange; color: black;">Github: ${engineer.getGithub()}</a>
            </div>
        </p>
        </div>
    </div>`
};

const generateManager = (manager) => {
    return `
    <div class="card bg-info mb-3" style="max-width: 20rem;">
    <div class="card-header" style="background-color: black;">
        <h2 style="color: orange;">${manager.getName()}</h2>
        <h4><i class="fas fa-mug-hot" style="color: orange;">${manager.getRole()}</i></h4>
    </div>
<div class="card-body bg-light">
    <p class="card-text">
    <div class="list-group">
        <a href="" class="list-group-item list-group-item-action active"style="background-color: orange; color: black;">ID: ${manager.getId()}</a>
        <a href="mailto: ${manager.getEmail()}" class="list-group-item list-group-item-action"style="background-color: orange; color: black;">Email: ${manager.getEmail()}</a>
        <a href="" class="list-group-item list-group-item-action disabled"style="background-color: orange; color: black;">Office Number: ${manager.getOfficeNumber()}</a>
    </div>
    </p>
</div>
</div>`
};

module.exports = generateHTML;