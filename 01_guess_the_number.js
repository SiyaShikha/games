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

function generateNumber(startRange, endRange) {
  const number = startRange + Math.floor(Math.random() * (endRange - startRange));
  // console.log(number);
  return number;
}

function isMatching(num1, num2) {
  return num1 === num2;
}

function isGuessInRange(start, end, guess) {
  return guess >= start && guess <= end;
}

function readGuess(start, end, remAttemps) {
  const guess = +prompt("🤔Take a guess! (Remaining attempts : " + remAttemps + ") ➜");

  if (!isGuessInRange(start, end, guess)) {
    console.log("Invalid guess!\n");
    return readGuess(start, end, remAttemps);
  }

  return guess;
}

function getWinningMessage(num) {
  return "🥳 Bravo! You have nailed it.....🔥🔥🔥🔥. The number was " + num;
}

function getLoosingMessage(num) {
  return "☹️ Ops! You have used all your attempts. The number was " + num;
}

function getHintMessage(guessedNum, numberToGuess) {
  if (guessedNum > numberToGuess) {
    return "🟢Try a smaller⬇ number.\n";
  }
  return "🔴Try a higher⬆ number.\n";
}

function playGame(startRange, endRange, noOfChances, numberToGuess) {
  for (let chance = 1; chance <= noOfChances; chance++) {
    const remAttemps = noOfChances - chance;
    const guessedNum = readGuess(startRange, endRange, remAttemps);

    if (isMatching(guessedNum, numberToGuess)) {
      console.log(decorateMessage(getWinningMessage(numberToGuess)));
      return;
    }
    console.log(getHintMessage(guessedNum, numberToGuess));
  }
  console.log(decorateMessage(getLoosingMessage(numberToGuess)));
}

function showInstruction(startRange, endRange, noOfChances) {
  const instructions = "\n👉🏻 INSTRUCTIONS -";
  const inst1 = "\n🔸 You have to guess a number in range " + startRange + " to " + endRange;
  const inst2 = "\n🔸 You have " + noOfChances + " chances to guess it.";
  const inst3 = "\n🔸 If you guess an invalid number, you will not loose your attempt.\n";
  console.log(instructions + inst1 + inst2 + inst3);
  console.log("All the Best!👍\n");
}

function showWelcomeMessage() {
  console.log(decorateMessage("🔢 WELCOME TO GUESS THE NUMBER 🔢"));
}

function showGoodByeMessage() {
  console.log(decorateMessage("🙋🏻‍♀️GoodBye!"));
}

function userWantsToPlayAgain() {
  return confirm("\nDo you want to play new game?");
}

function startGame(startRange, endRange, noOfChances) {
  showWelcomeMessage();
  showInstruction(startRange, endRange, noOfChances);

  const numberToGuess = generateNumber(startRange, endRange);
  playGame(startRange, endRange, noOfChances, numberToGuess);

  if (userWantsToPlayAgain()) {
    return startGame(startRange, endRange, noOfChances);
  }

  showGoodByeMessage();
}

// startGame(startRange endRange noOfChances);
startGame(1, 20, 5);
