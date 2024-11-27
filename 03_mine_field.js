function repeat(string, nTimes) {
  let repeatedString = "";
  for (let index = 0; index < nTimes; index++) {
    repeatedString += string;
  }
  return repeatedString;
}

function decorateMessage(string) {
  const line = repeat("ᯓ", string.length);
  return line + "\n" + string + "\n" + line;
}

function showWelcomeMessage() {
  console.log(decorateMessage("💣💥💥WELCOME TO MINEFIELD💥💥💣"));
}

function showGoodByeMessage() {
  console.log(decorateMessage("🙋🏻‍♀️GoodBye!"));
}

function rollTheDice() {
  prompt("\nHit return to roll the dice.");
  const dice = Math.ceil(Math.random() * 6);
  return dice;
}

function isBomb(position) {
  const bombIndexes = [3, 6, 7, 9, 12, 13];
  for (let index = 0; index < bombIndexes.length; index++) {
    if (position === bombIndexes[index]) {
      return true;
    }
  }
  return false;
}

function getWinningMessage() {
  return "🥳 Congratulations! You reached the safe destination....🏆🏆🏆";
}

function createTopLine(length) {
  return "┏" + repeat("━━━━┳", length - 1) + "━━━━" + "┓";
}

function createBottomLine(length) {
  return "┗" + repeat("━━━━┻", length - 1) + "━━━━" + "┛";
}

function delay(time) {
  for (let i = 0; i <= time; i++) { }
}

function createGameFieldRow(position) {
  let string = "";
  for (let index = 0; index <= 15; index++) {
    if (isBomb(index) && position === index) {
      string += "┃ 💣 ";
    } else if (position === index) {
      string += "┃ 🏃🏻‍♂️‍➡️ ";
    } else {
      string += "┃ 🟧 ";
    }
  }
  return string + "┃";
}

function createIndexRow() {
  let string = "";

  for (let index = 0; index < 10; index++) {
    string += "┃ " + index + "  ";
  }

  for (let index = 10; index <= 15; index++) {
    string += "┃ " + index + " ";
  }

  return string + "┃";
}

function createBoard(position, diceRoll) {
  console.log("\ndice Roll  : " + diceRoll);
  console.log("position🏃🏻‍♂️‍➡️ : " + position + "\n");
  console.log(createTopLine(16));
  console.log(createGameFieldRow(position));
  console.log(createIndexRow());
  console.log(createBottomLine(16));
}

function showBoard(position, diceRoll) {
  console.clear();
  createBoard(position, diceRoll);
  return;
}

function foundBomb(position, diceRoll) {
  showBoard(position, diceRoll);
  delay(600000000);
  position = 0;
  showBoard(position, diceRoll);
  return position;
}

function above15(position, diceRoll) {
  const newPosition = position - diceRoll;
  showBoard(newPosition, diceRoll);
  return newPosition;
}

function winningPosition(diceRoll) {
  showBoard(15, diceRoll);
  console.log(decorateMessage(getWinningMessage()));
  return;
}

function playGame() {
  let position = 1;

  while (position < 15) {
    const diceRoll = rollTheDice();
    position += diceRoll;
    showBoard(position, diceRoll);

    if (isBomb(position)) {
      position = foundBomb(position, diceRoll);
    }

    if (position > 15) {
      position = above15(position, diceRoll);
    }

    if (position === 15) {
      winningPosition(diceRoll);
      return;
    }
  }
}

function userWantsToPlayAgain() {
  return confirm("\nDo you want to play new game?");
}

function startGame(position) {
  showWelcomeMessage();
  prompt("\nHit return to start the Game 👇");
  createBoard(position, " ");
  playGame();

  if (!userWantsToPlayAgain()) {
    showGoodByeMessage();
    return;
  }
  startGame();
}

startGame(0);
