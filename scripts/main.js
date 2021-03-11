class RockPaperScissors {
    constructor() {
        this.moves = {
            0: "rock",
            1: "paper",
            2: "scissors",
        };
        this.round = 1;
        this.playerScore = 0;
        this.computerScore = 0;
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

    incrementScores(roundWinner) {
        if (roundWinner === 'player') {
            this.playerScore++;
        } else if (roundWinner === 'computer') {
            this.computerScore++;
        }
    }

    logRound(playerMove, computerMove, roundWinner) {
        /**Appends one-line summary of round to gameLog div.*/
        // Convert numerical moves to text using this.moves dictionary.
        const gameLog = document.getElementById("gameLog");
        const log = document.createElement("p"); 

        // Display one-line summary of round.
        const logRound = `Round ${this.round}`;
        const logMoves = ( 
            `P: ${this.moves[playerMove]} - C: ${this.moves[computerMove]}`);
        const logScores = `P${this.playerScore} - C${this.computerScore}`;
        log.innerHTML = ` ${logRound} | ${logMoves} | ${logScores}`;
        gameLog.appendChild(log);
    }

    playRound(playerMove, computerMove) {
        let roundWinner = this.getRoundWinner(playerMove, computerMove);
        
        this.incrementScores(roundWinner);
        this.logRound(playerMove, computerMove, roundWinner);

        this.round++;
    }

    play() {
        //**Runs the game.*/

        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                this.playRound(button.id, this.getComputerMove());
            })
        })
    }

    reset() {
        this.round = 0;
        this.playerScore = 0;
        this.computerScore = 0;
    }
}

let game = new RockPaperScissors(); 
game.play();
