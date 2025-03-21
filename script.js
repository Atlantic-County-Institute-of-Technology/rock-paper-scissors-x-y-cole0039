const choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return randomIndex;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === 0 && (computerChoice === 2 || computerChoice === 3)) || // Rock beats Scissors and Spock
        (userChoice === 1 && (computerChoice === 0 || computerChoice === 4)) || // Paper beats Rock and Lizard
        (userChoice === 2 && (computerChoice === 1 || computerChoice === 3)) || // Scissors beats Paper and Lizard
        (userChoice === 3 && (computerChoice === 1 || computerChoice === 4)) || // Spock beats Paper and Rock
        (userChoice === 4 && (computerChoice === 0 || computerChoice === 2))    // Lizard beats Rock and Scissors
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(You chose: ${choices[userChoice]});
    console.log(Computer chose: ${choices[computerChoice]});
    console.log(determineWinner(userChoice, computerChoice));
}

// Example usage:
playGame(0); // User chooses Rock
playGame(1); // User chooses Paper
playGame(2); // User chooses Scissors
playGame(3); // User chooses Spock
playGame(4); // User chooses Lizard