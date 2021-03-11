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

    incrementScores(roundWinner) {
        //**Increments scores of players based on winner of round.*/
        if (roundWinner === 'player') {
            this.playerScore++;
        } else if (roundWinner === 'computer') {
            this.computerScore++;
        }
    }

    updateGameLog(playerMove, computerMove) {
        /**Appends one-line summary of round to gameLog div.*/
        const gameLog = document.getElementById("gameLog");
        const log = document.createElement("p"); 

        const logRound = `R${this.round}`;
        const logMoves = ( 
            `P: ${this.moves[playerMove]} - C: ${this.moves[computerMove]}`);
        const logScores = `P: ${this.playerScore} - C: ${this.computerScore}`;
        log.textContent = `${logRound} | ${logMoves} | ${logScores}`;
        gameLog.appendChild(log);
    }

    updatePlayArea(playerMove, computerMove, roundWinner) {
        //**Updates contents of playArea div.*/
        document.getElementById('round').textContent = `Round: ${this.round}`;  
        document.getElementById('you').textContent = `You: ${playerMove}`;
        document.getElementById('computer').textContent = (
            `Computer: ${computerMove}`);
        document.getElementById('winner').textContent = (
            `Result: ${roundWinner}`);
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

    checkEndGame() {
        /**Clears playArea div and displays result of game once either player
         * reaches 5 points.*/
        if (this.playerScore === 5 || this.computerScore === 5) {
            // Empty playArea div.
            const playArea = document.getElementById('playArea'); 
            playArea.innerHTML = '';
    
            // Append game result to playArea.
            const gameOver = document.createElement('h1');
            gameOver.textContent = 'Game over!';
    
            const result = document.createElement('h4');
            result.textContent = this.getResult();
    
            playArea.appendChild(gameOver);
            playArea.appendChild(result);

            // Append "Play Again" button to playArea.
            const playAgainButton = document.createElement('button');
            playAgainButton.textContent = 'Play Again';
            playAgainButton.addEventListener('click', () => {
                window.location.reload();
            })
            playArea.appendChild(playAgainButton);
        }
    }

    playRound(playerMove, computerMove) {
        //**Plays one round of rock-paper-scissors.*/
        let roundWinner = this.getRoundWinner(playerMove, computerMove);
        
        this.incrementScores(roundWinner);
        this.updateGameLog(playerMove, computerMove);
        this.updatePlayArea(
            this.moves[playerMove], this.moves[computerMove], roundWinner);
        this.checkEndGame();

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
}

let game = new RockPaperScissors(); 
game.play();
