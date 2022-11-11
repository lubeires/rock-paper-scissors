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
      ? "You won this round! Rock beats scissors."
      : "You lose this round! Paper beats rock.";
    // checks who won if user chose paper
  } else if (playerSelection.toLowerCase() === "paper") {
    return computerSelection === "rock"
      ? "You won this round! Paper beats rock."
      : "You lose this round! Scissors beats paper.";
    // checks who won if user chose scissors
  } else if (playerSelection.toLowerCase() === "scissors") {
    return computerSelection === "paper"
      ? "You won this round! Scissors beats paper."
      : "You lose this round! Rock beats scissors.";
  }
}

document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    const result = playRound(choice.dataset.value, getComputerChoice());
    const roundResult = document.querySelector("#round-result");
    const playerPoints = document.querySelector("#player");
    const computerPoints = document.querySelector("#computer");

    if (result.includes("Tie")) {
      roundResult.style.color = "#181818";
    } else {
      if (result.includes("won")) {
        roundResult.style.color = "green";
        playerPoints.textContent = Number(playerPoints.textContent) + 1;
      } else {
        roundResult.style.color = "red";
        computerPoints.textContent = Number(computerPoints.textContent) + 1;
      }
    }
    roundResult.textContent = result;
    if (
      computerPoints.textContent === "5" ||
      playerPoints.textContent === "5"
    ) {
      document.querySelector(".play").style.display = "none";
      const end = document.querySelector(".end");
      const finalResult = document.createElement("h2");

      finalResult.style.fontSize = "2rem";

      if (playerPoints.textContent === "5") {
        finalResult.textContent = "End of game... You won!";
        finalResult.style.color = "green";
      } else {
        finalResult.textContent = "End of game... You lose!";
        finalResult.style.color = "red";
      }

      end.insertBefore(finalResult, document.querySelector("#play-again"));

      end.style.display = "block";
    }
  });
});

document
  .querySelector("#play-again")
  .addEventListener("click", () => location.reload());
