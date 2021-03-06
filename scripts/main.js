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
    /**Gets a key of a dictionary by its value.*/
    return Object.keys(object).find(key => object[key] === value);
}

function getRoundWinner(playerChoice, computerChoice) { 
    /**Returns string of winner of the round.*/
    if (((playerChoice + 1) % 3) == computerChoice) {
        return "computer";
    } else if (playerChoice == computerChoice) {
        return "draw";
    } else {
        return "player";
    }
}

function playRound(playerChoice, computerChoice) {
    /**Runs a round of the game.*/
    return {
        "playerChoice": getKeyByValue(choices, playerChoice),
        "computerChoice": getKeyByValue(choices, computerChoice),
        "roundWinner": getRoundWinner(playerChoice, computerChoice),
    };
}

function printRoundResults(round_num, round, playerScore, computerScore) {
    /**Prints results of round to console.*/
    console.log(`----- ROUND ${round_num + 1} -----`)
    console.log(`Player: ${round.playerChoice}`);
    console.log(`Computer: ${round.computerChoice}`);
    console.log(`Winner: ${round.roundWinner}`);
    console.log(`${playerScore} - ${computerScore}`);
}

function getGameWinner(playerScore, computerScore) {
    /**Returns winner of the five rounds based on scores.*/
    if (playerScore > computerScore) {
        return "Player wins!";
    } else if (playerScore < computerScore) {
        return "Computer wins!";
    } else {
        return "It's a draw!";
    }
}

function playGame() {
    /**Runs playRound() five consecutive times.*/
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        round = playRound(playerPlay(), computerPlay());
        if (round.roundWinner === "player") {
            playerScore++;
        } else if (round.roundWinner === "computer") {
            computerScore++;
        }
        printRoundResults(i, round, playerScore, computerScore);
    }
    return (`-- GAME OVER - ${getGameWinner(playerScore, computerScore)} --`);
}

console.log(playGame());