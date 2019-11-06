const grid = new Grid(10, 10);
grid.init(gameMap, freeTiles);

// grid.addObstacles();
for (let n = 0; n < grid.numberOfObstacles; n++) {
    grid.addItem(obstacle, freeTiles);
}

// grid.addWeapons();
for (let n = 0; n < weapons.length; n++) {
    grid.addItem(weapons[n], freeTiles);
}

// grid.addPlayers(players);
for (let n = 0; n < players.length; n++) {
    grid.addItem(players[n], freeTiles);
}

displayGrid(grid, gameMap);




console.log(gameMap);
console.log(grid);
