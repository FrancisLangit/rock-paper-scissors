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

    updateCards(playerMove, computerMove, roundWinner) {
        /**Updates text contents of cards in body.*/
        document.getElementById('displayPlayerScore').textContent = (
            `You: ${this.playerScore}`);
        document.getElementById('displayComputerScore').textContent = (
            `Computer: ${this.computerScore}`);
        document.getElementById('displayRound').textContent = (
            `Round: ${this.round}`);  
        document.getElementById('displayComputerMove').textContent = (
            `${this.moves[computerMove]}!`);
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

        // Create card.
        const container = document.createElement('div');
        container.setAttribute('class', 'd-flex justify-content-center')

        const card = document.createElement('div');
        card.setAttribute('class', 'card text-center mx-5 mt-3');
        card.setAttribute('style', 'width: 75vw;');
        container.appendChild(card);

        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        card.appendChild(cardBody);

        // Fill card with results of game. 
        const gameOver = document.createElement('h5');
        gameOver.setAttribute('class', 'card-title')
        gameOver.textContent = 'Game over.';
        cardBody.appendChild(gameOver);

        const result = document.createElement('p');
        result.setAttribute('class', 'card-text');
        result.textContent = this.getResult();
        cardBody.appendChild(result);

        // Append play again button to cardBody.
        const playAgainButton = document.createElement('button');
        playAgainButton.setAttribute('type', 'button');
        playAgainButton.setAttribute('class', 'btn btn-outline-dark ');
        playAgainButton.textContent = 'Play Again';
        playAgainButton.addEventListener('click', () => {
            window.location.reload();
        })
        cardBody.appendChild(playAgainButton);

        // Append card to body.
        document.getElementsByTagName('body')[0].appendChild(container);
    }

    checkEndGame() {
        /**Clears playArea div and displays result of game and "Play Again"
         * button once either player reaches 5 points.*/
        if (this.playerScore === 5 || this.computerScore === 5) {
            document.querySelectorAll('button').forEach(elem => {
                elem.disabled = true;
              });              
            this.displayResult();
        }
    }

    playRound(playerMove, computerMove) {
        /**Plays one round of rock-paper-scissors.*/
        let roundWinner = this.getRoundWinner(playerMove, computerMove);
        this.incrementScores(roundWinner);
        this.updateCards(playerMove, computerMove, roundWinner);
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
