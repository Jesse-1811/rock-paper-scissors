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


// let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
// let computerSelection = getComputerChoice();

let userScore = 0;
let compScore = 0;

function game() { 
  let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  let computerSelection = getComputerChoice();
    // function gameRound(playerSelection, computerSelection) {
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
gameRounds()
console.log("Your score: " + userScore);
console.log("Computers score: " + compScore);


// 5 round game
// Tracks wins and losses for each round
// Prints the winner at the end of the game

// function gameRound(playerSelection, computerSelection) {
    // if (computerSelection === "rock" && playerSelection === "paper"){
        // count++;
        // return "You win!, Paper beats rock!";
    // } else if (computerSelection === "rock" && playerSelection === "scissors"){
    //     count--;
    //     return "You lose!, Rock beats scissors!";
    // } else if (computerSelection === "paper" && playerSelection === "rock"){
    //     count--;
    //     return "You lose!, paper beats rock!";
    // } else if (computerSelection === "paper" && playerSelection === "scissors"){
    //     count++;
    //     return "You win!, scissors beats paper!";
    // } else if (computerSelection === "scissors" && playerSelection === "rock"){
    //     count++;
    //     return "You win!, rock beats scissors!";
    // } else if (computerSelection === "scissors" && playerSelection === "paper"){
    //     count--;
    //     return "You lose!, scissors beats paper!";
    // } else if (computerSelection === playerSelection){
    //     return "Its a draw!";
    // } else {
    //     return "Please select a valid option";
    // }
// }