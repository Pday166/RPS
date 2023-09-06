let rps = ['rock', 'paper', 'scissors'];
let compChoice;
let playerSelection;
const buttons = document.querySelectorAll('button');
let playerScore = document.querySelector('#player');
let machineScore = document.querySelector('#computer');
let report = document.querySelector('#report');
let repoChoice = document.querySelector('#choice');
let player = 0;
let machineWin = 0;


function getComputerChoice() {
    let index = Math.floor(Math.random() * rps.length);
    let computerSelection = rps[index];
    console.log(computerSelection);
    return computerSelection;
}

function playRound(compChoice, playerSelection) {
    let result;
    let player = "Player";
    let machine = "Machine";
    let tie = "Tie";


    if (playerSelection == 'rock' && compChoice == 'scissors') {
        result = player;
    } else if (playerSelection == 'paper' && compChoice == 'scissors') {

        result = machine;
    }
    else if (playerSelection == 'scissors' && compChoice == 'paper') {

        result = player;
    }
    else if (playerSelection == 'scissors' && compChoice == 'rock') {

        result = machine;
    }
    else if (playerSelection == 'paper' && compChoice == 'rock') {

        result = player;
    }
    else if (playerSelection == 'rock' && compChoice == 'paper') {

        result = machine;
    }
    else {
        result = tie;
    }

    if (result == tie) {
        report.textContent = "Tie ";
        repoChoice.textContent = ` both chose ${compChoice}  ${playerSelection}`
    }
    else if (result == machine) {
        report.textContent = "Computer wins round ";
        repoChoice.textContent = `${compChoice} beats ${playerSelection}`;
    }
    else {
        report.textContent = "Player wins round ";
        repoChoice.textContent = `${playerSelection} beats ${compChoice}`;
    }
   

    score(result);

}

function score(win) {

    if (win == 'Machine') {
        machineWin++;

    }
    else if (win == 'Player') {
        player++
    }

   

    if (player == 5) {
        reset();
        report.textContent = "Player wins!!!!!";
       
    }
    else if (machineWin == 5) {
        reset();
        report.textContent = "A la Machina wins!!!!!";
       
    }
   
    playerScore.textContent = player;
    machineScore.textContent = machineWin;

}


function game() {

    let i = 0;
    while (i < 5) {

        buttons.forEach(button => { button.addEventListener('click', getPlayerChoice) });
         i++;
    }
    return 0;
}





function getPlayerChoice(e) {
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    let winny = playRound(getComputerChoice(), playerSelection);
    return winny;
}

function reset() {
    player = 0;
    machineWin = 0;
}

for (let i = 0; i < 5; i++) {

    game();
   
}
