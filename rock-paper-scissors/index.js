const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const userChoice = document.getElementById("user-selected");
const result = document.getElementById("result");
const winner = document.getElementById("winner");
let userScore = 0;
let computerScore = 0;

paper.addEventListener("click", function () {
    let playerSelection = "paper";
    userChoice.innerHTML = "Your choice = " + playerSelection.toUpperCase();
    result.innerHTML = "Result = " + playRound(playerSelection, computerPlay());
})

rock.addEventListener("click", function () {
    let playerSelection = "rock";
    userChoice.innerHTML = "Your choice = " + playerSelection.toUpperCase();
    result.innerHTML = "Result = " + playRound(playerSelection, computerPlay());
})

scissors.addEventListener("click", function () {
    let playerSelection = "scissors";
    userChoice.innerHTML = "Your choice = " + playerSelection.toUpperCase();
    result.innerHTML = "Result = " + playRound(playerSelection, computerPlay());
})

function computerPlay() {
    const computerRandom = (Math.random() * 3);
    if (computerRandom == 0) {
        return "rock";
    } else if (computerRandom == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        gameWinner();
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        userScore += 1;
        gameWinner();
        return "You Win! Rock broke Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        userScore += 1;
        gameWinner();
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        gameWinner();
        return "You Lose! Scissors cut Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        gameWinner();
        return "You Lose! Rock broke Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        userScore += 1;
        gameWinner();
        return "You Win! Scissors cut Paper";
    } else {
        return "Draw"
    }
}

function gameWinner() {
    if (computerScore == 5 || userScore == 5) {
        if (computerScore > userScore) {
            winner.innerHTML = "Bilgisayar " + computerScore + " skor alarak kazandı. Sizin skorunuz : " + userScore;
            computerScore = 0;
            userScore = 0;
        } else {
            winner.innerHTML = "Siz " + userScore + " skor alarak kazandınız. Bilgisayarın skoru : " + computerScore;
            computerScore = 0;
            userScore = 0;
        }
    } else if (computerScore == 0 || userScore == 0) {
        winner.innerHTML = "";
    }
}