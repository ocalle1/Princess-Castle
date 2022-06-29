const readline = require('readline-sync');

// User character choice
let userPick = ["Mario", "Luigi"];
let nameOf = readline.keyInSelect(userPick);

// User status
let userStatus = ["Small", "Big", "Powered Up", "Dead"];

// player constructor
class Player {
    constructor(nameOf){

    this.name = nameOf
    this.totalCoins = 0
    this.status = userStatus[0]
    }
};

// setName function
setName(nameOf) {
    this.name = nameOf
};

// gotHit function
gothit() {
    if (this.hasStar === true){
        console.log("The star protected you!")
        this.hasStar = false
    }
    if ( this.status === "Powered Up"){
        this.status = userStatus[1]
    } else if (this.status === "Big"){
        this.status = userStatus[0]
    } else if (this.status === "Small"){
        this.status = userStatus[3]
    }

};



    

