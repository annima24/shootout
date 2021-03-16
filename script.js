let plr = 0;
let cpu = 0;

const container = document.querySelector('#container');

const rock = document.createElement('button');
rock.textContent = 'Rock';

const paper = document.createElement('button');
paper.textContent = 'Paper';

const scissor = document.createElement('button');
scissor.textContent = 'Scissor';

const resetBtn = document.createElement('button');
resetBtn.textContent = 'reset';

const result = document.createElement('p');
result.textContent = `Play a round!`;

function computerPlay()  {
    let selection = Math.random();
        if(selection <= .33) {
            return 'rock';
        } else if (selection <=.66) {
            return 'paper';
        } else if (selection < 1){
            return 'scissor';
        }
    };

function score(man,machine) {
    result.textContent = `The results of the game are as follows:
    You have ${man} points. And the computer has ${machine} points`;
    return playGame();
}

function playRound(choice) {    
    let computerSelection = computerPlay();
    let input = choice.target.textContent;
    let player = input.toLowerCase();   

    if (player === 'rock' && computerSelection =='rock' 
    ||player === 'paper' && computerSelection =='paper' 
    ||player === 'scissor' && computerSelection =='scissor')  {
        return alert('it\'s a tie');

    } else if (player === 'rock' && computerSelection =='scissor' 
    ||player === 'paper' && computerSelection =='rock' 
    ||player === 'scissor' && computerSelection =='paper')  {
        return plr++ , score(plr,cpu);

    } else if  (player === 'rock' && computerSelection =='paper' 
    ||player === 'paper' && computerSelection =='scissor' 
    ||player === 'scissor' && computerSelection =='rock')  {
        return cpu++ , score(plr,cpu);
    } 
}

function playGame() {
    if (plr > 2)  {
        alert('You Win');        
        return reset();
    } else if (cpu > 2)  {
        alert('The Machines have won!');        
        return reset();
    } else return;
}

function reset()    {
    result.textContent = 'Play a round!'
    return plr = 0, cpu = 0;
}

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissor);
container.appendChild(resetBtn);
container.appendChild(result);

rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
scissor.addEventListener('click',playRound);
resetBtn.addEventListener('click', reset);