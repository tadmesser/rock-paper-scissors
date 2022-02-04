//allow computer to select rock, paper, or scissors. done
//create input for user to select rock paper scissors
//after each round display who won that round
//loop back to play again 4 more times
//after 5 rounds, display overall winner and reset

let playerCount = 0;
let computerCount = 0

for (let i = 0 ; i < 5 ; i++){
    function computerPlay() {

        let selections = ['rock', 'paper', 'scissors'];
        let selection = selections[Math.floor(Math.random()*selections.length)];
        return selection;

    }
    const computerSelection = computerPlay();
    //console.log(computerSelection);

    let playerSelection = prompt('Type out Rock, Paper, or Scissors').toLowerCase();
   

    function playRound ( playerSelection, computerSelection) {

        if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerCount++;
            return 'Paper covers rock! You lose';

        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerCount++;
            return 'Rock smashes scissors. You win!';

        } else if (playerSelection === 'rock' && computerSelection === 'rock') {
            i--;
            return 'it is a tie!';

        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerCount++;
            return 'Scissors cut paper. You lose!';

        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerCount++;
            return 'Paper covers rock. You win!';

        }else if (playerSelection === 'paper' && computerSelection === 'paper') {
            i--;
            return 'Tie!';

        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerCount++;
            return 'Scissors cut paper. You win!';

        }else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            i--;
            return 'it is a tie!';

        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerCount++;
            return 'Rock smashes scissors. You lose';

        } else {
            i--;
            return "Enter a valid selection";

        }

    }
    console.log(playRound(playerSelection, computerSelection));
    console.log("You: " + playerCount + ' vs Computer: ' + computerCount)
    if (playerCount >= 3) {
        console.log("IT'S OVER. YOU WIN!!");
    } else if (computerCount >= 3) {
        console.log("IT'S OVER. YOU LOSE!!");
    }
}    