let playerScore = 0;
let computerScore = 0;

let playersChoice;
let computersChoice;
let resultStr;


const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.onclick = function () {
    playersChoice = "rock";
    gameRound(playersChoice);
    printResult(playersChoice);
    displayScore(playerScore, computerScore);
    if(playerScore == 5 || computerScore == 5) {
        showGameEnd(playerScore, computerScore);
    }
}

paper.onclick = function () {
    playersChoice = "paper";
    gameRound(playersChoice);
    printResult(playersChoice);
    displayScore(playerScore, computerScore);    
    if(playerScore == 5 || computerScore == 5) {
        showGameEnd(playerScore, computerScore);
    }
}

scissors.onclick = function () {
    playersChoice = "scissors";
    gameRound(playersChoice);
    printResult(playersChoice);
    displayScore(playerScore, computerScore);
    if(playerScore == 5 || computerScore == 5) {
        showGameEnd(playerScore, computerScore);
    }
}


function gameRound(playersChoice) {

    let randomIndex = Math.floor(Math.random() * 3);
    // pick word from an array with random index as a computer choice
    let choices = ["rock", "paper", "scissors"];
    computersChoice = choices[randomIndex];
 
    if (playersChoice === "rock") {
        switch (computersChoice) {
            case "rock":
                resultStr = "It's a tie!";
                break;
            case "paper":
                computerScore++;
                resultStr = "You lost! Paper covers Rock";
                break;
            case "scissors":
                playerScore++;
                resultStr = "You won! Rock breaks Scissors";
                break;
        }
    }
    else if (playersChoice === "paper") {
        switch (computersChoice) {
            case "paper":
                resultStr = "It's a tie!";
                break;
            case "scissors":
                computerScore++;
                resultStr = "You lost! Scissors cuts Paper";
                break;
            case "rock":
                playerScore++;
                resultStr = "You won! Paper covers Rock";
                break;
        }
    }
    else if (playersChoice === "scissors") {
        switch (computersChoice) {
            case "scissors":
                resultStr = "It's a tie!";
                break;
            case "rock":
                computerScore++;
                resultStr = "You lost! Rock breaks Scissors";
                break;
            case "paper":
                playerScore++;
                resultStr = "You won! Scissors cuts Paper";
                break;
        }
    }
    else console.log("error");
    return resultStr, playerScore, computerScore;
}

function printResult(playersChoice) {
    const roundResult = document.getElementById("round-result");
    if (playersChoice) {
        appearImg(playersChoice); // if player made a choice print player's and computer's choice in a result box
        roundResult.innerHTML = resultStr;
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

function showGameEnd(){
    const results = document.getElementById("results");

    // create div for player game result
    const playerResult = document.createElement("div");
    playerResult.setAttribute("class", "player-result");
    const playerFinalScore = document.createElement("div");
    const p1 = document.createElement("p");
    p1.innerText = "Your Score:";
    playerResult.appendChild(p1);
    playerFinalScore.setAttribute("class", "player-score");
    playerFinalScore.innerText = playerScore;
    playerResult.appendChild(playerFinalScore);
    results.appendChild(playerResult);

    //create div for computer game result
    const computerResult = document.createElement("div");
    computerResult.setAttribute("class", "computer-result");
    const computerFinalScore = document.createElement("div");
    const p2 = document.createElement("p");
    p2.innerText = "Computer Score:";
    computerResult.appendChild(p2);
    computerFinalScore.setAttribute("class", "computer-score");
    computerFinalScore.innerText = computerScore;
    computerResult.appendChild(computerFinalScore);
    results.appendChild(computerResult);

    if (playerScore > computerScore ){
        playerResult.classList.add("winner");
        computerResult.classList.add("loser");
    }

    else{
        playerResult.classList.add("loser");
        computerResult.classList.add("winner");
    }


    playerScore = 0;
    computerScore = 0;
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

