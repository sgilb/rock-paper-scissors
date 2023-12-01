const options = document.getElementById("options");
let playerScore = 0;
let computerScore = 0;

options.addEventListener("click", (event) => {
  const choice = event.target.id;

  let winner;

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    winner = playRound(choice, getComputerChoice());
  }

  if (playerScore === 5 || computerScore === 5) {
    winner = playerScore > computerScore ? "Player" : "Computer";

    const buttons = options.querySelectorAll("button");
    for (button of buttons) {
      button.disabled = true;
    }
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
      computerScore++;
    } else if (computer === "scissors") {
      winner = "player";
      playerScore++;
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      winner = "player";
      playerScore++;
    } else if (computer === "scissors") {
      winner = "computer";
      computerScore++;
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      winner = "computer";
      computerScore++
    } else if (computer === "paper") {
      winner = "player";
      playerScore++
    }
  } else {
    console.log("Something's gone horribly wrong!");
  }

  const roundWinner = document.getElementById("winner");
  roundWinner.innerText = printScore(winner, playerScore, computerScore);

  return winner;
}

function printScore(winner, playerScore, computerScore) {
  roundResult = (winner === "tie")
  ? "Round tied! "
  : `${winner.charAt(0).toUpperCase() + winner.slice(1)} wins! `
  
  return roundResult + `Player ${playerScore} - ${computerScore} Computer`;  

}
