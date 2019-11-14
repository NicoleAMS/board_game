// const grid = new Grid(10, 10);

function startGame() {
	// initializes the grid
  grid.init(gameMap, freeTiles);

  // adds obstacles
  for (let n = 0; n < grid.numberOfObstacles; n++) {
    grid.addItem(obstacles[n], freeTiles, getRandomIndex(freeTiles));
  }

  // adds weapons
  for (let n = 0; n < weapons.length; n++) {
    grid.addItem(weapons[n], freeTiles, getRandomIndex(freeTiles));
  }

  // adds players / characters
  for (let n = 0; n < players.length; n++) {
    grid.addItem(players[n], freeTiles, getRandomIndex(freeTiles));
  }

  displayGrid(grid, gameMap);
}

function getRandomIndex(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

startGame();
// grid.removeItem(player1, freeTiles);

console.log(gameMap);
player1.setAvailableMoves(directions);
player2.setAvailableMoves(directions);

