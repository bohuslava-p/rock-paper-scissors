// player makes choice (through input) * case insensitive
let playersChoice = prompt("Please enter your choice for game", "")
playersChoice = playersChoice.toLowerCase();
// computer makes it's choice by random
// generate random number from 0 to 2
let randomIndex = Math.floor(Math.random() * 3);
// pick word from an array with random index
let choices = ["rock", "paper", "scissors"];
let computersChoice = choices[randomIndex];

let playerScore = 0;
let computerScore = 0;

function gameRound() {
    // if player chose rock:
    if (playersChoice === "rock") {
        // switch for computer's choice:  
        switch (computersChoice) {
            // case rock = a tie
            case "rock":
                return "It's a tie! Play next round";
                break;
            // case paper = computer won
            case "paper":
                computerScore++;
                return "You lost! Paper covers Rock";
                break;
            // case scissors = player won
            case "scissors":
                playerScore++;
                return "You won! Rock breaks Scissors";
                break;
        }
    }

    // if player chose paper:
    if (playersChoice === "paper") {
        // switch for computer's choice: 
        switch (computersChoice) {
            // case paper = a tie
            case "paper":
                return "It's a tie! Play next round";
                break;
            // case scissors = computer won
            case "scissors":
                computerScore++;
                return "You lost! Scissors cuts Paper";
                break;
            // case rock = player won
            case "rock":
                playerScore++;
                return "You won! Paper covers Rock";
                break;
        }
    }

    // if player chose scissors:
    if (playersChoice === "scissors") {
        // switch for computer's choice:
        switch (computersChoice) {
            // case scissors = a tie
            case "scissors":
                return "It's a tie! Play next round";
                break;
            // case rock = computer won
            case "rock":
                computerScore++;
                return "You lost! Rock breaks Scissors";
                break;
            // case paper = player won
            case "paper":
                playerScore++;
                return "You won! Scissors cuts Paper";
                break;
        }
    }

}
console.log("player " + playersChoice);
console.log("Comp " + computersChoice);

console.log(gameRound());
console.log(computerScore);
console.log(playerScore);


// print out the result


