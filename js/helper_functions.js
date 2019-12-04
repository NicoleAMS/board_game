function getRandomIndex(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function createElement(el, id, classNames, source) {
  let element = document.createElement(el);
  element.id = id;
  for (i = 0; i < classNames.length; i++) {
    element.classList.add(classNames[i]);
  }
  if (source) {
    element.src = source;
  }
  return element;
}

function getPosition(x, y) {
  return {
    x: x,
    y: y
  };
}

function takeTurns(players) {
  let player;
  if (turn) {
    player = players[0];
  } else {
    player = players[1];
  }
  return player;
}

function consoleLogStats() {
	console.log("Player 1: " + players[0].character.name + "\n Health: " + players[0].character.health + "\n Weapon damage: " + players[0].character.weapon.damage);
  console.log("Player 2: " + players[1].character.name + "\n Health: " + players[1].character.health + "\n Weapon damage: " + players[1].character.weapon.damage);
}