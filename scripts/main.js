function computerPlay() {
    /**Returns random choice between "rock", "paper", and "scissors".*/
    let choices = ["rock", "paper", "scissors"];
    const choice_index = Math.floor(Math.random() * choices.length);
    return choices[choice_index]
}

console.log(computerPlay());