class Grid {
  constructor(gridWidth = 10, gridHeight = 10) {
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.numberOfObstacles = Math.floor(gridWidth * gridHeight * 0.2);
  }

  init(map, tiles) {
    for (let y = 0; y < this.gridHeight; y++) {
      map.push([]);
      for (let x = 0; x < this.gridWidth; x++) {
        let tile = new Tile(x, y);
        tiles.push(tile);
        map[y].push({
          tile: tile
        });
      }
    }
  }

  addItem(item, tiles, obstacle) {
    let randomIndex = Math.floor(Math.random() * tiles.length);
    let chosenTile = tiles[randomIndex];
    if (item === obstacle) {
      chosenTile.blocked = true;
    } else {
      chosenTile.items.push(item);
      item.tile = chosenTile;
    }
    tiles.splice(randomIndex, 1);
  }

}

function displayGrid(grid, map) {
  const gameCanvas = document.getElementById("game");
  gameCanvas.style.width = `${grid.gridWidth * 80}px`;

  for (row in map) {
    for (column in map[row]) {
      let tile = map[row][column].tile;
      let hasObstacle = tile.blocked;
			let hasWeapon = false;
			let hasPlayer = false;
      for (item in tile.items) {
        if (tile.items[item] instanceof Weapon) {
          hasWeapon = true;
        } else if (tile.items[item] instanceof Player) {
					hasPlayer = true;
				}
      }
      let tileDiv = document.createElement("div");
      tileDiv.classList.add("tile", "row_" + tile.y);
      if (hasObstacle) {
        tileDiv.classList.add("obstacle");
      }
      if (hasWeapon) {
        let weaponDiv = document.createElement("img");
        weaponDiv.src = tile.items[0].image;
        weaponDiv.classList.add("weapon");
				tileDiv.appendChild(weaponDiv);
			}
			if (hasPlayer) {
        let gamePiece = document.createElement("img");
        gamePiece.src = tile.items[0].character.image;
				gamePiece.classList.add("gamepiece");
        tileDiv.appendChild(gamePiece);
			}
      gameCanvas.appendChild(tileDiv);
    }
  }
}
