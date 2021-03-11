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
            return "neither";
        } else {
            return "player";
        }
    }

    incrementScores(roundWinner) {
        /**Increments scores of players based on winner of round.*/
        if (roundWinner === 'player') {
            this.playerScore++;
        } else if (roundWinner === 'computer') {
            this.computerScore++;
        }
    }

    updateGameLog(playerMove, computerMove, roundWinner) {
        /**Appends one-line summary of round to gameLog div.*/
        const gameLog = document.getElementById("gameLog");
        const log = document.createElement("p"); 

        const logRound = `Round ${this.round}.`;
        const logPlayerMove = `You play ${this.moves[playerMove]}.`;
        const logComputerMove = `Computer plays ${this.moves[computerMove]}.`;
        const logWinner = `Round goes to ${roundWinner}.`;

        log.textContent = (
            `${logRound} ${logPlayerMove} ${logComputerMove} ${logWinner}`);
        gameLog.appendChild(log);
    }

    updatePlayArea(playerMove, computerMove, roundWinner) {
        /**Updates text contents of playArea div.*/
        document.getElementById('displayPlayerScore').textContent = (
            `Player: ${this.playerScore}`);
        document.getElementById('displayComputerScore').textContent = (
            `Computer: ${this.computerScore}`);
        document.getElementById('displayRound').textContent = (
            `Round: ${this.round}`);  
        document.getElementById('displayPlayerMove').textContent = (
            `You: ${this.moves[playerMove]}`);
        document.getElementById('displayComputerMove').textContent = (
            `Computer: ${this.moves[computerMove]}`);
        document.getElementById('displayWinner').textContent = (
            `Winner: ${roundWinner}`);
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

    displayResult() {
        /**Displays who won the best of five.*/
        const gameOver = document.createElement('h1');
        gameOver.textContent = 'Game over!';

        const result = document.createElement('h4');
        result.textContent = this.getResult();

        playArea.appendChild(gameOver);
        playArea.appendChild(result);
    }

    displayPlayAgainButton() {
        /**Displays a "Play Again" button that reloads the page.*/
        const playAgainButton = document.createElement('button');
        playAgainButton.textContent = 'Play Again';
        playAgainButton.addEventListener('click', () => {
            window.location.reload();
        })
        playArea.appendChild(playAgainButton);
    }

    checkEndGame() {
        /**Clears playArea div and displays result of game and "Play Again"
         * button once either player reaches 5 points.*/
        if (this.playerScore === 5 || this.computerScore === 5) {
            document.getElementById('playArea').innerHTML = '';
            this.displayResult();
            this.displayPlayAgainButton();
        }
    }

    playRound(playerMove, computerMove) {
        /**Plays one round of rock-paper-scissors.*/
        let roundWinner = this.getRoundWinner(playerMove, computerMove);
        this.incrementScores(roundWinner);
        this.updateGameLog(playerMove, computerMove, roundWinner);
        this.updatePlayArea(playerMove, computerMove, roundWinner);
        this.checkEndGame();
        this.round++;
    }

    play() {
        /**Runs the game.*/
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
