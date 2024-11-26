const ROCK = 0;
const PAPER = 1;
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

const DRAWN_MESSAGE = decorateMessage("🤝Its a tie!");
const PLAYER_WIN_MESSAGE = decorateMessage("🏆Congratulations! You won.");
const COMP_WIN_MESSAGE = decorateMessage("Ops! You Lost.🤞Better Luck Next Time.");
const INVALID_MESSAGE = decorateMessage("❌ Invalid Choice.");

const DRAWN = 0;
const PLAYER_WON = 1;
const COMPUTER_WON = 2;

function decideWinner(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    return DRAWN;
  }
  if (playerChoice - compChoice === 1 || (playerChoice - compChoice === -2)) {
    return PLAYER_WON;
  }
  return COMPUTER_WON;
}

function showResult(result) {
  if (result === DRAWN) {
    return DRAWN_MESSAGE;
  }

  if (result === PLAYER_WON) {
    return PLAYER_WIN_MESSAGE;
  }

  return COMP_WIN_MESSAGE;
}

function createInstruction(value, category) {
  return "\n🔹 " + value + " is for " + category;
}

function showInstruction() {
  const rock = createInstruction("0", "ROCK✊");
  const paper = createInstruction("1", "PAPER🖐");
  const scissors = createInstruction("2", "SCISSORS✌️");
  console.log("\n👉🏻 INSTRUCTIONS -" + rock + paper + scissors);
}

function showWelcomeMessage() {
  const welcomeMessage = decorateMessage("🪨🗒 ✂️ Welcome to ROCK PAPER SCISSORS ✂️ 🗒 🪨");
  console.log(welcomeMessage)
}

function userWantsToPlayAgain() {
  return confirm("\nDo you want to play new game?");
}

function showGoodByeMessage() {
  console.log(decorateMessage("🙋🏻‍♀️GoodBye!"));
}

function readPlayerChoice() {
  const choice = +prompt("\n🔴Enter Your Choice (0,1,2) : ");

  if (choice !== ROCK && choice !== PAPER && choice !== SCISSORS) {
    console.log(INVALID_MESSAGE);
    return readPlayerChoice();
  }

  return choice;
}

function generateRandomNumber(to, from) {
  return to + Math.floor(Math.random() * (from - to));
}

function generateComputerChoice() {
  let choice = generateRandomNumber(0, 3);
  return choice;
}

function showPlayerAndComputerChoice(playerChoice, compChoice) {
  console.log("\n👩🏻Player    : " + playerChoice);
  console.log("🌐Computer  : " + compChoice);
}

function playGame() {
  showWelcomeMessage();
  showInstruction();

  const playerChoice = readPlayerChoice();
  const compChoice = generateComputerChoice();

  showPlayerAndComputerChoice(playerChoice, compChoice);
  const winner = decideWinner(playerChoice, compChoice);
  console.log(showResult(winner));

  if (!userWantsToPlayAgain()) {
    showGoodByeMessage();
    return;
  }

  playGame();
}

playGame();
