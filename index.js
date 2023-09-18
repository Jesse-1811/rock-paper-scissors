function getComputerChoice() {
 const choices = ["rock", "paper", "scissors"];
 let compChoice = Math.floor(Math.random() * choices.length) + 1;
    if (compChoice === 1){
        return "rock";
    } else if (compChoice === 2){
        return "paper";
    } else {
        return "scissors"
    }
}


let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
let computerSelection = getComputerChoice();




function gameRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "paper"){
         return "You win!, Paper beats rock!";
    } else if (computerSelection === "rock" && playerSelection === "scissors"){
        return "You lose!, Rock beats scissors!";
    } else if (computerSelection === "paper" && playerSelection === "rock"){
        return "You lose!, paper beats rock!";
    } else if (computerSelection === "paper" && playerSelection === "scissors"){
        return "You win!, scissors beats paper!";
    } else if (computerSelection === "scissors" && playerSelection === "rock"){
        return "You win!, rock beats scissors!";
    } else if (computerSelection === "scissors" && playerSelection === "paper"){
        return "You lose!, scissors beats paper!";
    } else if (computerSelection === playerSelection){
        return "Its a draw!";
    } else {
        return "Please select a valid option";
    }
}

console.log(gameRound(playerSelection, computerSelection));