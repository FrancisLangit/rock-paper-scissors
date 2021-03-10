class RockPaperScissors {
    constructor() {
        this.round = 0;
        this.moves = {
            0: "rock",
            1: "paper",
            2: "scissors",
        };
        this.playerScore = 0;
        this.computerScore = 0;
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
        this.round++;
        return {
            "playerMove": this.moves[playerMove],
            "computerMove": this.moves[computerMove],
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
        //**Runs the game.*/
        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => { 
            button.addEventListener('click', () => {
                let playerMove = button.id;
                let computerMove = this.getComputerMove();
                let round = this.playRound(playerMove, computerMove);

                if (round.winner === 'player') {
                    this.playerScore++;
                } else if (round.winner === 'computer') {
                    this.computerScore++;
                }
                console.log(`----- ROUND ${this.round} -----`)
                console.log(`Player: ${round.playerMove}`);
                console.log(`Computer: ${round.computerMove}`);
                console.log(`Winner: ${round.winner}`);
                console.log(`${this.playerScore} - ${this.computerScore}`);

                if (this.round > 4) {
                    this.round = 0;
                    this.playerScore = 0;
                    this.computerScore = 0;

                    let result = this.getResult(this.playerScore, this.computerScore)
                    console.log(`-- GAME OVER - ${result} --`);
                }
            })
        })
    }
}

let game = new RockPaperScissors(); 
game.play();
