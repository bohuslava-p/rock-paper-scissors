let playerScore = 0;
let computerScore = 0;

let playersChoice;
let computersChoice;
function gameRound() {

    // player makes choice (through input) * case insensitive
    playersChoice = prompt("Please enter your choice for game", "")
    playersChoice = playersChoice.toLowerCase();

    // computer makes it's choice by random
    // generate random number from 0 to 2
    let randomIndex = Math.floor(Math.random() * 3);
    // pick word from an array with random index
    let choices = ["rock", "paper", "scissors"];
    computersChoice = choices[randomIndex];

    // if player chose rock:
    if (playersChoice === "rock") {
        // switch for computer's choice:  
        switch (computersChoice) {
            // case rock = a tie
            case "rock":
                return "It's a tie!";
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
    else if (playersChoice === "paper") {
        // switch for computer's choice: 
        switch (computersChoice) {
            // case paper = a tie
            case "paper":
                return "It's a tie!";
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
    else if (playersChoice === "scissors") {
        // switch for computer's choice:
        switch (computersChoice) {
            // case scissors = a tie
            case "scissors":
                return "It's a tie!";
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
    else {
        alert("Incorrect word. Choose 'Rock', 'Paper' or 'Scissors'");
        gameRound(playersChoice, computersChoice);
    }
 
}

function playFiveRounds(){
    for (let i=1; i<=5; i++){
        alert(gameRound(playersChoice, computersChoice));
    }
}

function printResult(){
    if (playerScore > computerScore) {
        return `You won! Your score: ${playerScore}, computer's score: ${computerScore}`;
    }
    else if (playerScore == computerScore){
        alert (`It's a tie! Your score: ${playerScore}, computer's score: ${computerScore}. Play next round to break the tie!`);
        gameRound();
        return printResult();
    }    
    else {
        return `You lost! Your score: ${playerScore}, computer's score: ${computerScore}`;
    }
}

playFiveRounds();
alert(printResult());
