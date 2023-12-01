const options = document.getElementById("options");
let playerScore = 0;
let computerScore = 0;

options.addEventListener("click", (event) => {
  const choice = event.target.id;

  let winner;

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    winner = playRound(choice, getComputerChoice());
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
    else {
      computerScore++;
      console.log(
        "Computer wins! Score: " + printScore(playerScore, computerScore)
      );
    }
  }

  if (playerScore === 5 || computerScore === 5) {
    winner = playerScore > computerScore ? "Player" : "Computer";
    console.log(
      `${winner} wins the game! Final Score: ${printScore(
        playerScore,
        computerScore
      )}`
    );
  }
});

function getComputerChoice() {
  // Pick random number between 1 and 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  player = playerSelection;
  computer = computerSelection;

  const choices = document.getElementById("choices");
  choices.innerText = `Player: ${player} \n Computer: ${computer}`;

  let winner;
  if (player === computer) {
    winner = "tie";
  } else if (player === "rock") {
    if (computer === "paper") {
      winner = "computer";
    } else if (computer === "scissors") {
      winner = "player";
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      winner = "player";
    } else if (computer === "scissors") {
      winner = "computer";
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      winner = "computer";
    } else if (computer === "paper") {
      winner = "player";
    }
  } else {
    console.log("Something's gone horribly wrong!");
  }

  const roundWinner = document.getElementById("winner");
  roundWinner.innerText =
    winner === "tie"
      ? "Round tied!"
      : `${winner.charAt(0).toUpperCase() + winner.slice(1)} wins!`;

  return winner;
}

function printScore(playerScore, computerScore) {
  return `Player ${playerScore} - ${computerScore} Computer`;
}
