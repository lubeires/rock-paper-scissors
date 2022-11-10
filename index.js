const choices = ["rock", "paper", "scissors"];
let play = true;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
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

document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    const result = playRound(choice.dataset.value, getComputerChoice());
    const resultDisplay = document.querySelector("h2");
    if (result.includes("Tie")) {
      resultDisplay.style.color = "#181818";
    } else {
      resultDisplay.style.color = result.includes("won") ? "green" : "red";
    }
    document.querySelector("h2").textContent = result;
  });
});
