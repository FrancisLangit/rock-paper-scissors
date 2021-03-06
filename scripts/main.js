function playGame() {
    /** Runs playRound() five consecutive times. */
    for (i = 0; i < 5; i++) {
        console.log(playRound(playerPlay(), computerPlay()));
    }
    return "Game over.";
}

function playRound(playerChoice, computerChoice) {
    /**Runs a round of the game.*/
    if (((playerChoice + 1) % 3) == computerChoice) {
        return "Player 2 won.";
    } else if (playerChoice == computerChoice) {
        return "Draw.";
    } else {
        return "Player 1 won.";
    }
}

function playerPlay() {
    /**Prompts choice from user.*/
    let choices = {
        "rock": 0,
        "paper": 1,
        "scissors": 2,
    };
    let playerChoice = prompt("Rock, paper, or scissors?");    
    return choices[playerChoice.toLowerCase()];
}

function computerPlay() {
    /**Returns random integer from [0, 1, 2].*/
    return Math.floor(Math.random() * Math.floor(3));
}

console.log(playGame());