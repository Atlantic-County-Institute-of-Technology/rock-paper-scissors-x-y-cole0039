const buttons = document.querySelectorAll('button');
const resultElement = document.getElementById('result');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const choices = ['rock', 'paper', 'scissors', 'trimmer', 'laminator'];
const resetButton = document.getElementById('reset');
let playerScore = 0;
let computerScore = 0;

// This is the math for picking a random number
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const winner = determineWinner(playerChoice, computerChoice);

        // Update scores based on the winner
        if (winner === 'You win!') {
            playerScore++;
        } else if (winner === 'Computer wins!') {
            computerScore++;
        }

        // Update the score display
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;

        resultElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${winner}`;
    });
});

// This tells the computer how to pick a winner
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    if (
        (player === 'rock' && (computer === 'scissors' || computer === 'laminator' || computer === 'trimmer')) ||
        (player === 'paper' && (computer === 'rock' || computer === 'laminator')) ||
        (player === 'scissors' && (computer === 'paper' || computer === 'laminator')) ||
        (player === 'trimmer' && (computer === 'rock' || computer === 'scissors' || computer === 'paper')) ||
        (player === 'laminator' && (computer === 'paper' || computer === 'trimmer')) 
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// this just resets the score to 0 when click on "reset"
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    resultElement.textContent = "Score reset!";
});
