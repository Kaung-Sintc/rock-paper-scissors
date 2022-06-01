const computerChoiceDisplay = document.getElementById("computerChoice");

const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const randomChoices =document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;



randomChoices.forEach(randomChoice=>randomChoice.addEventListener("click",(e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const numbers = Math.floor(Math.random()*3)+1;
    


    if (numbers === 1) {
        computerChoice = "rock";
    }
    if (numbers === 2) {
        computerChoice = "paper";
    }
    if (numbers === 3) {
        computerChoice = "scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult(){
   if (computerChoice === userChoice) {
       result = "It's a draw!!"
   } 

   if (computerChoice ==="rock" && userChoice==="paper" ) {
    result = "YOU WIN!!"
} 

   if (computerChoice === "rock" && userChoice==="scissors") {
    result = "YOU LOST!!"
} 
if (computerChoice ==="paper" && userChoice==="scissors" ) {
    result = "YOU WIN!!"
} 
if (computerChoice ==="paper" && userChoice==="rock" ) {
    result = "YOU LOST!!"
} 
if (computerChoice ==="scissors" && userChoice==="rock" ) {
    result ="YOU WIN!!"
} 
if (computerChoice ==="scissors" && userChoice==="paper" ) {
    result = "YOU LOST!!"
} 
resultDisplay.innerHTML = result;
}