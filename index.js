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


console.log(computerChoice);
let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();


function gameRound(playerSelection,  getComputerChoice) {
    if (getComputerChoice === "rock" && playerSelection === "paper"){
        console.log("You win!, Paper beats rock!");
    } else if (getComputerChoice === "rock" && playerSelection === "scissors"){
        console.log("You lose!, Rock beats scissors!");
    } else if (getComputerChoice === "paper" && playerSelection === "rock"){
        console.log("You lose!, paper beats rock!")
    } else if (getComputerChoice === "paper" && playerSelection === "scissors"){
        console.log("You win!, scissors beats paper!")
    } else if (getComputerChoice === "scissors" && playerSelection === "rock"){
        console.log("You win!, rock beats scissors!")
    } else if (getComputerChoice === "scissors" && playerSelection === "paper"){
        console.log("You lose!, scissors beats paper!")
    } else if (getComputerChoice === playerSelection){
        console.log("Its a draw!");
    } else {
        console.log("Please select a valid option")
    }
}