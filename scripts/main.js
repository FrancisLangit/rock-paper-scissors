let choices = {
    "rock": 0,
    "paper": 1,
    "scissors": 2,
};

function playerPlay() {
    /**Prompts choice from user.*/
    let playerChoice = prompt("Rock, paper, or scissors?");    
    return choices[playerChoice.toLowerCase()];
}

function computerPlay() {
    /**Returns random integer from [0, 1, 2].*/
    return Math.floor(Math.random() * Math.floor(3));
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function playRound(playerChoice, computerChoice) {
    /**Runs a round of the game.*/
    console.log(`Player - ${getKeyByValue(choices, playerChoice)}.`);
    console.log(`Computer - ${getKeyByValue(choices, computerChoice)}.`);
    if (((playerChoice + 1) % 3) == computerChoice) {
        return "Computer won.";
    } else if (playerChoice == computerChoice) {
        return "Draw.";
    } else {
        return "Player won.";
    }
}

function playGame() {
    /** Runs playRound() five consecutive times. */
    for (i = 0; i < 5; i++) {
        console.log(playRound(playerPlay(), computerPlay()));
    }
    return "Game over.";
}

console.log(playGame());