let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function win(userChoice){
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = "You are a master, you defeated computer " + "<br><br>" + "WIN !!";
    userChoice_div.classList.add("green-shadow");
    setTimeout(() => userChoice_div.classList.remove("green-shadow"), 200)
}
function lose(userChoice){
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "What are you doing? Choose better"  + "<br><br>" + "LOSE !!";
    userChoice_div.classList.add("red-shadow");
    setTimeout(() => userChoice_div.classList.remove("red-shadow"), 200)
}
function draw(userChoice){
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = "Was close! Now you beat him!"  + "<br><br>" + "DRAW !!";
    userChoice_div.classList.add("grey-shadow");
    setTimeout(() => userChoice_div.classList.remove("grey-shadow"), 200)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();
    