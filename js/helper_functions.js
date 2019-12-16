function getRandomIndex(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function getPosition(x, y) {
  return {
    x: x,
    y: y
  };
}

function takeTurns(turn, players) {
  let player;
  if (turn) {
    player = players[0];
  } else {
    player = players[1];
  }
  return player;
}
