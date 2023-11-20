// Imports the Team class from team.js file 
const Team = require('./team');

//Creates an array of total of 5 teams an assigns team values

let teams = [
    new Team('Alabama', 'Crimson Tide', '54'),
    new Team('LSU', 'Tigers', '54'),
    new Team('Georgia', 'Bulldogs', '54'),
    new Team('Texas', 'Longhorns', '54'),
    new Team('USC', 'Trojans', '54'),
]

//Create a function name getTeams that returns
// and array of Team description.
module.exports.getTeams = function() {
    return teams;
} 

//Creates a function named getTeam with a single parameter for name. 
//Return a single team object using JavaScript's built-in find()function. 
module.exports.getTeam = function(name) {
    for (let team of teams) {
        if (team.name === name){
           return team 
        }
    }
}

//Creates a function name displayTeam with a single parameter for team. 
//Returns a formatted string using the team object properties. 
module.exports.displayTeam = function(team) {
    return 'Name:' + team.name + '\nMascot:' + team.mascot + '\nPlayers Count:' + team.players + '\n';
}