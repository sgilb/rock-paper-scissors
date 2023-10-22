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
  // Player forfeits on cancel or invalid entry
  player = typeof playerSelection === "string" ? playerSelection.toLowerCase() : null;
  
  computer = computerSelection.toLowerCase();
  console.log("Player: " + player + ", Computer: " + computer);

  if (player === computer) {
    return "tie";
  } else if (player === "rock") {
    if (computer === "paper") {
      return "computer";
    } else if (computer === "scissors") {
      return "player";
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      return "player";
    } else if (computer === "scissors") {
      return "computer";
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      return "computer";
    } else if (computer === "paper") {
      return "player";
    }
  } else {
    return "Something's gone horribly wrong!"
  }
}

function game() {
  let winner;
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    winner = playRound(prompt("Rock, Paper or Scissors?"), getComputerChoice());
    if (winner === "player") {
      playerScore++;
      console.log(`Player wins! Score: Player ${playerScore} - ${computerScore} Computer`);
    } else if (winner === "tie") {
      console.log(`Round tied! Score: Player ${playerScore} - ${computerScore} Computer`);
    }
    // Computer wins if player loses or gives invalid input
    else {
      computerScore++;
      console.log(`Computer wins! Score: Player ${playerScore} - ${computerScore} Computer`);
    }
  }

  if (playerScore === computerScore) {
    console.log(`Tie game! Final Score: Player ${playerScore} - ${computerScore} Computer`);
  } else {
    winner = playerScore > computerScore ? "Player" : "Computer";
    console.log(`${winner} wins the game! Final Score: Player ${playerScore} - ${computerScore} Computer`);
  }
}

game();
