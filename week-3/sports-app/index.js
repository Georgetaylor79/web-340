// Import the team manger module from the team-manager.js file
const TeamManager = require('./team-manager');

//Get a an array of team objects from the team-manager.js file.
let teams = TeamManager.getTeams();

//Display teh contents of the teams array.
for (let team of teams){
    console.log(team.name + " " + team.mascot);
}

const Alabama = TeamManager.getTeam('Alabama');


const LSU = TeamManager.getTeam('LSU');


const Georgia = TeamManager.getTeam('Georgia');


const Texas = TeamManager.getTeam('Texas');


const USC = TeamManager.getTeam('USC');

console.log(TeamManager.displayTeam(Alabama));
console.log(TeamManager.displayTeam(LSU));
console.log(TeamManager.displayTeam(Georgia));
console.log(TeamManager.displayTeam(Texas));
console.log(TeamManager.displayTeam(USC));

