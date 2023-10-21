function getComputerChoice() {
  // Pick random number between 1 and 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  player = playerSelection.toLowerCase();
  computer = computerSelection.toLowerCase();
  console.log("Player: " + player + ", Computer: " + computer);

  if (player === computer) {
    return "Tie! Try again";
  } else if (player === "rock") {
    if (computer === "paper") {
      return "You lose! Paper beats Rock";
    } else if (computer === "scissors") {
      return "You win! Rock beats Scissors";
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      return "You win! Paper beats Rock";
    } else if (computer === "scissors") {
      return "You lose! Scissors beats Paper";
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      return "You lose! Rock beats Scissors";
    } else if (computer === "paper") {
      return "You win! Scissors beats Paper";
    }
  } else {
    return "Something's gone horribly wrong!"
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
