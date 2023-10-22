const playButton = document.getElementById("play");
playButton.addEventListener("click", game);

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
  player =
    typeof playerSelection === "string" ? playerSelection.toLowerCase() : null;

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
    return "Something's gone horribly wrong!";
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
      console.log(
        "Player wins! Score: " + printScore(playerScore, computerScore)
      );
    } else if (winner === "tie") {
      console.log(
        "Round tied! Score: " + printScore(playerScore, computerScore)
      );
    }
    // Computer wins if player loses or gives invalid input
    else {
      computerScore++;
      console.log(
        "Computer wins! Score: " + printScore(playerScore, computerScore)
      );
    }
  }

  if (playerScore === computerScore) {
    console.log(
      "Tie game! Final Score: " + printScore(playerScore, computerScore)
    );
  } else {
    winner = playerScore > computerScore ? "Player" : "Computer";
    console.log(
      `${winner} wins the game! Final Score: ${printScore(
        playerScore,
        computerScore
      )}`
    );
  }
}

function printScore(playerScore, computerScore) {
  return `Player ${playerScore} - ${computerScore} Computer`;
}
