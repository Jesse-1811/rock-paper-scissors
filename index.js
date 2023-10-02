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

let userScore = 0;
let compScore = 0;

function game() { 
  let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  let computerSelection = getComputerChoice();
        if (computerSelection === "rock" && playerSelection === "paper"){
            userScore++;
            console.log("You win! Paper beats rock!");
        } else if (computerSelection === "rock" && playerSelection === "scissors"){
            compScore++;
            console.log("You lose! Rock beats scissors!");
        } else if (computerSelection === "paper" && playerSelection === "rock"){
            compScore++;
            console.log("You lose! Paper beats rock!");
        } else if (computerSelection === "paper" && playerSelection === "scissors"){
            userScore++;
            console.log("You win! Scissors beats paper!");
        } else if (computerSelection === "scissors" && playerSelection === "rock"){
            userScore++;
            console.log("You win! Rock beats scissors!");
        } else if (computerSelection === "scissors" && playerSelection === "paper"){
            compScore++;
            console.log("You lose! Scissors beats paper!");
        } else if (computerSelection === playerSelection){
            console.log("Its a draw!");
        } else {
            console.log("Please select a valid option");
        }
    
}

function gameRounds() {
    for (let i = 0; i < 5; i++) {
        game();
    }
}

function winner(userScore, compScore) {
    if (userScore > compScore) {
        return "You won this round!"
    } else if (userScore < compScore) {
        return "You lost this round!"
    } else {
        return "This round is a draw!"
    }
}

gameRounds()
console.log("Your score: " + userScore);
console.log("Computers score: " + compScore);
console.log(winner(userScore, compScore));
