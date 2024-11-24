const ROCK = 0;
const PAPER = 5;
const SCISSORS = 2;

function repeat(string, nTimes) {
  let repeatedString = "";
  for (let index = 0; index < nTimes; index++) {
    repeatedString += string;
  }
  return repeatedString;
}

function decorateMessage(string) {
  const line = repeat("─", string.length);
  return line + "\n" + string + "\n" + line;
}

const tie = decorateMessage("🤝Its a tie!");
const playerWin = decorateMessage("🏆Congratulations! You won.");
const compWin = decorateMessage("Ops! You Lost.🤞Better Luck Next Time.");
const invalid = decorateMessage("❌ Invalid Choice.");

function decideWinner(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    return tie;
  }
  if (playerChoice === ROCK) {
    return compChoice === PAPER ? compWin : playerWin;
  }
  if (playerChoice === PAPER) {
    return compChoice === SCISSORS ? compWin : playerWin;
  }
  if (playerChoice === SCISSORS) {
    return compChoice === ROCK ? compWin : playerWin;
  }
}

function showWelcomeMessage() {
  const welcomeMessage = decorateMessage("🪨🗒 ✂️ Welcome to ROCK PAPER SCISSORS ✂️ 🗒 🪨");
  const rock = "\n🔹 0️ is for ROCK✊";
  const paper = "\n🔹 5️ is for PAPER🖐";
  const scissors = "\n🔹 2️ is for SCISSORS✌️\n";

  console.log(welcomeMessage + "\n👉🏻 INSTRUCTIONS -" + rock + paper + scissors);
}

function userWantsToPlayAgain() {
  return confirm("\nDo you want to play new game?");
}

function showGoodByeMessage() {
  console.log(decorateMessage("🙋🏻‍♀️GoodBye!"));
}

function readPlayerChoice() {
  const choice = +prompt("🔴Enter Your Choice (0,5,2) : ");

  if (choice !== ROCK && choice !== PAPER && choice !== SCISSORS) {
    console.log(invalid);
    return readPlayerChoice();
  }

  return choice;
}

function generateComputerChoice() {
  let choice = Math.floor(Math.random() * 10) % 3;
  if (choice === 1) {
    choice = PAPER;
  }
  return choice;
}

function showPlayerAndComputerChoice(playerChoice, compChoice) {
  console.log("\n👩🏻Player    : " + playerChoice);
  console.log("🌐Computer  : " + compChoice);
}

function startGame() {
  showWelcomeMessage();

  const playerChoice = readPlayerChoice();
  const compChoice = generateComputerChoice();

  showPlayerAndComputerChoice(playerChoice, compChoice);
  console.log(decideWinner(playerChoice, compChoice));

  if (userWantsToPlayAgain()) {
    return startGame();
  }

  showGoodByeMessage();
}

startGame();
