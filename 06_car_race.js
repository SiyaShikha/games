function repeat(string, nTimes) {
  let repeatedString = "";
  for (let index = 0; index < nTimes; index++) {
    repeatedString += string;
  }
  return repeatedString;
}

function delay(time) {
  for (let i = 0; i <= time; i++) { }
}

function createRoad(roadLength, carIndex) {
  return repeat("─", carIndex) + "⛟" + repeat("─", roadLength - carIndex) + "⚑";
}

function movingCar(roadLength) {
  for (let index = 0; index < roadLength; index++) {
    console.clear();
    console.log("\n\n" + createRoad(roadLength, index));
    delay(500000000);
  }

}

// movingCar(roadLength);
movingCar(100);
