const choices = ["rock", "paper", "scissors"];
let play = true;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  // checks if user typed a valid value
  if (!choices.includes(playerSelection.toLowerCase()))
    return "Type a valie choice...";

  // checks if it's a tie
  if (playerSelection.toLowerCase() === computerSelection) {
    return `Tie! Both chose ${computerSelection}.`;
    // checks who won if user chose rock
  } else if (playerSelection.toLowerCase() === "rock") {
    return computerSelection === "scissors"
      ? "You won! Rock beats scissors."
      : "You lose! Paper beats rock.";
    // checks who won if user chose paper
  } else if (playerSelection.toLowerCase() === "paper") {
    return computerSelection === "rock"
      ? "You won! Paper beats rock."
      : "You lose! Scissors beats paper.";
    // checks who won if user chose scissors
  } else if (playerSelection.toLowerCase() === "scissors") {
    return computerSelection === "paper"
      ? "You won! Scissors beats paper."
      : "You lose! Rock beats scissors.";
  }
}

// starts a new round until user presses ESC
while (play) {
  playerSelection = prompt(
    "What's your choice? (rock, paper or scissors) [press ESC to exit]"
  );
  alert(playRound(playerSelection, getComputerChoice()));
}

document.onkeyup(() => {
  if (e.key === "Escape") {
    play = false;
  }
});
