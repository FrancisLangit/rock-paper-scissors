class RockPaperScissors {
    constructor() {
        this.moves = {
            "rock": 0,
            "paper": 1,
            "scissors": 2,
        };
        this.playerScore = 0;
        this.computerScore = 0;
    }

    getKeyByValue(object, value) {
        /**Gets dictionary key by its value.*/
        return Object.keys(object).find(key => object[key] === value);
    }

    getPlayerMove() {
        /**Prompts user's move for round.*/
        let playerMove = prompt("Rock, paper, or scissors?");    
        return this.moves[playerMove.toLowerCase()];
    }

    getComputerMove() {
        /**Returns random integer from [0, 1, 2] representing computer's move 
         * for round.*/
        return Math.floor(Math.random() * Math.floor(3));
    }
    
    getRoundWinner(playerMove, computerMove) { 
        /**Returns winner of the round.*/
        if (((playerMove + 1) % 3) == computerMove) {
            return "computer";
        } else if (playerMove == computerMove) {
            return "draw";
        } else {
            return "player";
        }
    }

    playRound(playerMove, computerMove) {
        /**Simulates one round of rock-paper-scissors. Returns dictionary
         * containing of results of round.*/
        return {
            "playerMove": this.getKeyByValue(this.moves, playerMove),
            "computerMove": this.getKeyByValue(this.moves, computerMove),
            "winner": this.getRoundWinner(playerMove, computerMove),
        };
    }

    getResult() {
        /**Returns string declaring result of game after five rounds.*/
        if (this.playerScore > this.computerScore) {
            return "Player wins!";
        } else if (this.playerScore < this.computerScore) {
            return "Computer wins!";
        } else {
            return "It's a draw!";
        }
    }
    
    play() {
        //**Runs playRound five times.*/
        for (let i = 0; i < 5; i++) {
            let playerMove = this.getPlayerMove();
            let computerMove = this.getComputerMove(); 
            let round = this.playRound(playerMove, computerMove);

            if (round.winner === 'player') {
                this.playerScore++;
            } else if (round.winner === 'computer') {
                this.computerScore++;
            }

            console.log(`----- ROUND ${i + 1} -----`)
            console.log(`Player: ${round.playerMove}`);
            console.log(`Computer: ${round.computerMove}`);
            console.log(`Winner: ${round.winner}`);
            console.log(`${this.playerScore} - ${this.computerScore}`);
        }

        let result = this.getResult(this.playerScore, this.computerScore)
        return `-- GAME OVER - ${result} --`;
    }
}

let game = new RockPaperScissors(); 
console.log(game.play());