let playerScore = 0;
let computerScore = 0;

let playersChoice;
let computersChoice;
let resultStr;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultContainer = document.getElementById("result-container");
const newGameButton = document.getElementById("new-game-button");

rock.onclick = function () {
    playersChoice = "rock";
    gameRound(playersChoice);
    printResult(playersChoice);
    displayScore(playerScore, computerScore);
    if (playerScore == 5 || computerScore == 5) {
        showGameEnd(playerScore, computerScore);
    }
}

paper.onclick = function () {
    playersChoice = "paper";
    gameRound(playersChoice);
    printResult(playersChoice);
    displayScore(playerScore, computerScore);
    if (playerScore == 5 || computerScore == 5) {
        showGameEnd(playerScore, computerScore);
    }
}

scissors.onclick = function () {
    playersChoice = "scissors";
    gameRound(playersChoice);
    printResult(playersChoice);
    displayScore(playerScore, computerScore);
    if (playerScore == 5 || computerScore == 5) {
        showGameEnd(playerScore, computerScore);
    }
}

newGameButton.onclick = function () {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("card").style.display = "block";
    document.getElementById("game-over-card").style.display = "none";
    resultContainer.style.display = "none";
    document.querySelector("#results").innerHTML = "";
}

window.onload = function() {
    rock.style.animation = "appear-start 650ms 200ms forwards";
    paper.style.animation = "appear-start 650ms 500ms forwards";
    scissors.style.animation = "appear-start 650ms 900ms forwards";
}

// base game logic 
function gameRound(playersChoice) {
    const roundResultText = document.getElementById("round-result");
    let randomIndex = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    computersChoice = choices[randomIndex];

    if (playersChoice === "rock") {
        switch (computersChoice) {
            case "rock":
                resultStr = "It's a tie!";
                resultContainer.style.background = "var(--light-yellow)";
                roundResultText.style.color = "var(--yellow)";
                break;
            case "paper":
                computerScore++;
                resultContainer.style.background = "var(--light-red)";
                roundResultText.style.color = "var(--red)";
                resultStr = "You lost! Paper covers Rock";
                break;
            case "scissors":
                playerScore++;
                resultContainer.style.background = "var(--light-green)";
                resultStr = "You won! Rock breaks Scissors";
                break;
        }
    }
    else if (playersChoice === "paper") {
        switch (computersChoice) {
            case "paper":
                resultStr = "It's a tie!";
                resultContainer.style.background = "var(--light-yellow)";
                roundResultText.style.color = "var(--yellow)";
                break;
            case "scissors":
                computerScore++;
                resultContainer.style.background = "var(--light-red)";
                roundResultText.style.color = "var(--red)";
                resultStr = "You lost! Scissors cuts Paper";
                break;
            case "rock":
                playerScore++;
                resultContainer.style.background = "var(--light-green)";
                roundResultText.style.color = "var(--green)";
                resultStr = "You won! Paper covers Rock";
                break;
        }
    }
    else if (playersChoice === "scissors") {
        switch (computersChoice) {
            case "scissors":
                resultStr = "It's a tie!";
                resultContainer.style.background = "var(--light-yellow)";
                roundResultText.style.color = "var(--yellow)";
                break;
            case "rock":
                computerScore++;
                resultContainer.style.background = "var(--light-red)";
                roundResultText.style.color = "var(--red)";
                resultStr = "You lost! Rock breaks Scissors";
                break;
            case "paper":
                playerScore++;
                resultContainer.style.background = "var(--light-green)";
                roundResultText.style.color = "var(--green)";
                resultStr = "You won! Scissors cuts Paper";
                break;
        }
    }
    else console.log("error");
    return resultStr, playerScore, computerScore;
}

// shows result of each round
function printResult(playersChoice) {
    resultContainer.style.display = "block";
    const roundResult = document.getElementById("round-result");
    if (playersChoice) {
        appearImg(playersChoice); // if player made a choice print player's and computer's choice in a result box
        roundResult.innerHTML = resultStr;
    }
}

// shows what player and computer chose
function appearImg(playersChoice) {
    const player = document.getElementById("player-choice");
    const computer = document.getElementById("computer-choice");

    const playerChoiceImg = document.querySelector("#player-choice img");
    const computersChoiceImg = document.querySelector("#computer-choice img");

    if (playerChoiceImg) {
        playerChoiceImg.remove();
        computersChoiceImg.remove();
    }

    const playerImgCopy = document.createElement("img");
    playerImgCopy.setAttribute("src", `images/${playersChoice}.png`);
    playerImgCopy.setAttribute("alt", playersChoice);
    player.appendChild(playerImgCopy);

    const computerImgCopy = document.createElement("img");
    computerImgCopy.setAttribute("src", `images/${computersChoice}.png`);
    computerImgCopy.setAttribute("alt", computersChoice);
    computer.appendChild(computerImgCopy);
}

// shows score during the game
function displayScore(playerScore, computerScore) {
    const scores = document.getElementById("scores");
    scores.innerText = `${playerScore} : ${computerScore}`;
}

// shows end result when game is over
function showGameEnd() {
    document.getElementById("card").style.display = "none";
    document.getElementById("game-over-card").style.display = "block";

    const results = document.getElementById("results");

    // create div for player's final game score
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

    //create div for computer's final game score
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

    if (playerScore > computerScore) {
        playerResult.classList.add("winner");
        computerResult.classList.add("loser");
        const winner = document.createElement("div");
        winner.setAttribute("id", "player-winner");
        if (document.getElementById("player-winner")) { document.getElementById("player-winner").remove(); }
        winner.innerText = "You won! Congratulations!";
        document.getElementById("game-over-card").insertBefore(winner, newGameButton);
    }
    else {
        playerResult.classList.add("loser");
        computerResult.classList.add("winner");
    }
}

