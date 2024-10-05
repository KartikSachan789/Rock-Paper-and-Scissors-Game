const choiceMenu = document.querySelector(".choice");
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "scissor", "paper"];

const checkWinner = (playerChoice, computerChoice) => {
  if (playerChoice === "rock" && computerChoice === "scissor") return "player";
  else if (playerChoice === "rock" && computerChoice === "paper")
    return "computer";
  else if (playerChoice === "paper" && computerChoice === "scissor")
    return "computer";
  else if (playerChoice === "paper" && computerChoice === "rock")
    return "player";
  else if (playerChoice === "scissor" && computerChoice === "rock")
    return "computer";
  else if (playerChoice === "scissor" && computerChoice === "paper")
    return "player";
  else return "";
};

choiceMenu.addEventListener("click", function (event) {
  document.querySelector(".draw").style.display = "none";
  if (event.target) {
    // console.log("i know you pressed me");
    playerChoice = event.target.className;
    console.log("Player Choice:" + playerChoice);
    document.querySelectorAll(
      ".choice-display"
    )[0].innerHTML = `<img src="./assets/images/${playerChoice}.jpg" alt=""></img>`;
  }
  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
  document.querySelectorAll(
    ".choice-display"
  )[1].innerHTML = `<img src="./assets/images/${computerChoice}.jpg" alt=""></img>`;

  console.log("Computer Choice:" + computerChoice);
  let winner = checkWinner(playerChoice, computerChoice);
  if (winner) console.log(`${winner} wins!!`);
  else console.log("Sorry, but no one wins");

  if (winner === "player") playerScore++;
  else if (winner === "computer") computerScore++;
  else document.querySelector(".draw").style.display = "block";

  document.querySelector(".player-score").textContent = `${playerScore}`;
  document.querySelector(".computer-score").textContent = `${computerScore}`;
});
