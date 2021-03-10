//player score - tabulation
let plr = 0;
//computer score - tabulation
let cpu = 0;

//this function selects a random value of three selectable choices, rock paper and scissor
function computerPlay()  {
//create a random number and log in a variable that will be used to determine what the cpu selection is
    let selection = Math.random();
    //console.log(selection);
    //if statement that takes the value of selection and assigns a string to it that represents the available choices in the game
    if(selection <= .33) {
        return 'rock';
    } else if (selection <=.66) {
        return 'paper';
    } else return 'scissor';
}
//this function playes one round of the game. it compares the player selection to the cpu selection and depending on the choices made outputs the winner and adds 1 to the respective variable that represents the score of the player or cpu
function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = prompt('please choose rock, paper, or scissor.');
    let player = playerSelection.toLowerCase();
    if (player === 'rock' && computerSelection =='rock' 
    ||player === 'paper' && computerSelection =='paper' 
    ||player === 'scissor' && computerSelection =='scissor')  {
        return 'it\'s a tie';
    } else if (player === 'rock' && computerSelection =='scissor' 
    ||player === 'paper' && computerSelection =='rock' 
    ||player === 'scissor' && computerSelection =='paper')  {
        return 'you win' , plr++, console.log(plr , 'you win');
    } else if  (player === 'rock' && computerSelection =='paper' 
    ||player === 'paper' && computerSelection =='scissor' 
    ||player === 'scissor' && computerSelection =='rock')  {
        return 'youfail' , cpu++ , console.log(cpu , 'you lose');
    } else if (player !== 'rock'|| player !== 'paper' || player !== 'scissor') {
        return  alert('that is not a valid choice');
    } else 'ERROR';
}
//runs playround() 5 times and returns a function which compares the two scores and outputs the winner of 5 rounds
function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    return winnerIs(plr, cpu, console.log('plr' , plr, 'cpu' , cpu));
}
//the comparison that outputs the winner
function winnerIs(plr,cpu) {
    if (plr>cpu)    {
        return `You're the winner! Final score: ${plr} to ${cpu}!`;
    } else if (plr<cpu) {
        return `You lost! Final score: ${plr} to ${cpu}!`;
    } else if (cpu === plr) {
        return 'it\'s a tie';
    }
}

console.log(game());