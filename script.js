const buttons = document.querySelectorAll('button');
const resultElement = document.getElementById('result');
const choices = ['rock', 'paper', 'scissors'];



// this is the math for picking a random number
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const winner = determineWinner(playerChoice, computerChoice);
        resultElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${winner}`;
    });
});
// this tell the computer how to pick a winner
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}