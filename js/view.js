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
