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
