let playerScore = 0;
let computerScore = 0;

let playersChoice;
let computersChoice;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.onclick = function () {
    gameRound("rock");
}

paper.onclick = function () {
    gameRound("paper");
}

scissors.onclick = function () {
    gameRound("scissors");
}


function gameRound(playersChoice) {
    // generate random number from 0 to 2
    let randomIndex = Math.floor(Math.random() * 3);
    // pick word from an array with random index
    let choices = ["rock", "paper", "scissors"];
    computersChoice = choices[randomIndex];

    // if player chose rock:
    if (playersChoice === "rock") {
        switch (computersChoice) {
            case "rock":
                // return "It's a tie!";
                break;
            case "paper":
                computerScore++;
                // return "You lost! Paper covers Rock";
                break;
            case "scissors":
                playerScore++;
                // return "You won! Rock breaks Scissors";
                break;
        }
    }

    // if player chose paper:
    else if (playersChoice === "paper") {
        switch (computersChoice) {
            case "paper":
                // return "It's a tie!";
                break;
            case "scissors":
                computerScore++;
                // return "You lost! Scissors cuts Paper";
                break;
            case "rock":
                playerScore++;
                // return "You won! Paper covers Rock";
                break;
        }
    }

    // if player chose scissors:
    else if (playersChoice === "scissors") {
        switch (computersChoice) {
            case "scissors":
                // return "It's a tie!";
                break;
            case "rock":
                computerScore++;
                // return "You lost! Rock breaks Scissors";
                break;
            case "paper":
                playerScore++;
                // return "You won! Scissors cuts Paper";
                break;
        }
    }
    else console.log("error");

    console.log(`${playersChoice} VS ${computersChoice}`);
    console.log(`${playerScore} : ${computerScore}`);
    printResult(playersChoice);
    displayScore(playerScore, computerScore);
}

function printResult(playersChoice) {
    if (playersChoice) {
        appearImg(playersChoice); // if player made a choice print player's and computer's choice in a result box
    }
}

function appearImg(playersChoice) { 
    const player = document.getElementById("player-choice");
    const computer = document.getElementById("computer-choice");
    const playerChoiceImg = document.querySelector("#player-choice img");
    const computersChoiceImg = document.querySelector("#computer-choice img"); 
    if (playerChoiceImg) {
        playerChoiceImg.remove();
        computersChoiceImg.remove();
    }
    player.innerHTML = `<img src="images/${playersChoice}.png" alt="rock">`;
    computer.innerHTML = `<img src="images/${computersChoice}.png" alt="rock">`;
}

function displayScore(playerScore, computerScore){
    const scores = document.getElementById("scores");
    scores.innerHTML = `${playerScore} : ${computerScore}`;
}

function printRoundResult(){
    const roundResult = document.getElementById("round-result");
    
}

// function printResult() {
//     if (playerScore > computerScore) {
//         return `You won! Your score: ${playerScore}, computer's score: ${computerScore}`;
//     }
//     else if (playerScore == computerScore) {
//         alert(`It's a tie! Your score: ${playerScore}, computer's score: ${computerScore}. Play next round to break the tie!`);
//         gameRound();
//         return printResult();
//     }
//     else {
//         return `You lost! Your score: ${playerScore}, computer's score: ${computerScore}`;
//     }
// }

