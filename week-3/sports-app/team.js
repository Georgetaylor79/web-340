/**
 * Creates a Team class with properties for team name, mascot, and player count.
 * Properties are initialized in the classes constructor.
 * Class is exported using Node's module system
 */
class Team {
    constructor(name, mascot, players){
        this.name = name;
        this.mascot = mascot;
        this.players = players;
    }
}

// Uses Nodes module system to export the Team class
// This makes the Team class accessible in other files.
module.exports = Team;
