function startGame(grid) {
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
		if (n >= 1) {
			let player1 = grid.items.find(item => {
				return item.id === "player1";
			});
			let directSurroundings = player1.setSurroundings(directions, 1);
			for (i = 0; i < directSurroundings.length; i++) {
				let tile = freeTiles.find(tile => {
					return tile.id === directSurroundings[i].id;
				});
				let index = freeTiles.indexOf(tile);
				freeTiles.splice(index, 1);
			}
		}
    grid.addItem(players[n], freeTiles[getRandomIndex(freeTiles)]);
	}
	
  grid.displayGrid();
}
