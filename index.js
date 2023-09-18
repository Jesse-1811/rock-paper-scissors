const choices = ["rock", "paper", "scissors"];
let compChoice = math.floor(math.random() * choices.length);

function getComputerChoice() {
    if (compChoice == 0){
        return "rock";
    } else if (compChoice == 1){
        return "paper";
    } else {
        return "scissors"
    }
}
