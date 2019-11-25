function startGame() {
  // initializes the grid
  grid.initMap();

  // adds obstacles
  for (let n = 0; n < grid.numberOfObstacles; n++) {
    let freeTiles = grid.getFreeTiles();
    grid.addItem(obstacles[n], freeTiles[getRandomIndex(freeTiles)]);
  }

  // adds weapons
  for (let n = 0; n < weapons.length; n++) {
    let freeTiles = grid.getFreeTiles();
    grid.addItem(weapons[n], freeTiles[getRandomIndex(freeTiles)]);
  }

  // adds players / characters
  for (let n = 0; n < players.length; n++) {
    let freeTiles = grid.getFreeTiles();
    grid.addItem(players[n], freeTiles[getRandomIndex(freeTiles)]);
  }

  grid.displayGrid();
}
