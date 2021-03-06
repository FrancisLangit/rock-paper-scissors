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

function playRound(playerChoice, computerChoice) {
    /**Runs a round of the game.*/
    let roundWinner; 
    if (((playerChoice + 1) % 3) == computerChoice) {
        roundWinner = "computer";
    } else if (playerChoice == computerChoice) {
        roundWinner = "draw";
    } else {
        roundWinner = "player";
    }

    return {
        "playerChoice": getKeyByValue(choices, playerChoice),
        "computerChoice": getKeyByValue(choices, computerChoice),
        "roundWinner": roundWinner,
    };
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
        
        console.log(`----- ROUND ${i + 1} -----`)
        console.log(`Player: ${round.playerChoice}`);
        console.log(`Computer: ${round.computerChoice}`);
        console.log(`Winner: ${round.roundWinner}`);
    }
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    
    if (playerScore > computerScore) {
        return "Player wins!";
    } else if (playerScore < computerScore) {
        return "Computer wins!";
    } else {
        return "It's a draw!";
    }
}

console.log(playGame());