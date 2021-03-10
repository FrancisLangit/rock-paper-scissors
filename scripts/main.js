class RockPaperScissors {
    constructor() {
        this.moves = {
            0: "rock",
            1: "paper",
            2: "scissors",
        };
        this.round = 0;
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
    
    playRound(button) {
        let playerMove = button.id;
        let computerMove = this.getComputerMove();
        let roundWinner = this.getRoundWinner(playerMove, computerMove);
        
        if (roundWinner === 'player') {
            this.playerScore++;
        } else if (roundWinner === 'computer') {
            this.computerScore++;
        }

        this.round++;

        console.log(`----- ROUND ${this.round} -----`)
        console.log(`Player: ${this.moves[playerMove]}`);
        console.log(`Computer: ${this.moves[computerMove]}`);
        console.log(`Winner: ${roundWinner}`);
        console.log(`${this.playerScore} - ${this.computerScore}`);
    }

    play() {
        //**Runs the game.*/
        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => { 
            button.addEventListener('click', () => {
                this.playRound(button);

                document.getElementById("scoreboardPlayer").innerHTML = this.playerScore;
                document.getElementById("scoreboardComputer").innerHTML = this.computerScore;

                if (this.round > 4) {
                    let result = this.getResult(this.playerScore, this.computerScore);
                    document.getElementById("result").innerHTML = result;
                }

                if (this.round > 5) {
                    this.reset();
                }
            })
        })
    }

    reset() {
        this.round = 0;
        this.playerScore = 0;
        this.computerScore = 0;
        document.getElementById("result").innerHTML = "";
    }
}

let game = new RockPaperScissors(); 
game.play();
