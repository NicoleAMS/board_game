class Grid {
  constructor(gridWidth = 10, gridHeight = 10) {
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.numberOfObstacles = Math.floor(gridWidth * gridHeight * 0.2);
    this.weapons = [];
    this.map = [];
    this.tiles = [];
  }

  init() {
    for (let y = 0; y < this.gridHeight; y++) {
      this.map.push([]);
      for (let x = 0; x < this.gridWidth; x++) {
        let tile = new Tile(y, x);
        this.tiles.push(tile);
        this.map[y].push({
          tile: tile
        });
      }
    }
    this.weapons.push(weapons);
  }

  addObstacles() {
    // let selectedTiles = [];
    // let remainingTiles = this.tiles.slice(0);
    for (let n = 0; n < this.numberOfObstacles; n++) {
      let randomIndex = Math.floor(Math.random() * this.tiles.length);
      let blockedTile = this.tiles[randomIndex];
      blockedTile.blocked = true;
      // selectedTiles.push(blockedTile);
      this.tiles.splice(randomIndex, 1);
    }
  }

  addWeapons() {
    // let remainingTiles = this.tiles.slice(0);
    for (let n = 0; n < this.weapons[0].length; n++) {
      let randomIndex = Math.floor(Math.random() * this.tiles.length);
      let tile = this.tiles[randomIndex];
      tile.items.push(this.weapons[0][n]);
    }
  }
}

function displayGrid(grid) {
  const gameCanvas = document.getElementById("game");
  gameCanvas.style.width = `${grid.gridWidth * 60}px`;

  for (row in grid.map) {
    for (column in grid.map[row]) {
      let tile = grid.map[row][column].tile;
      let hasObstacle = tile.blocked;
      let hasWeapon = false;
      for (item in tile.items) {
        if (tile.items[item] instanceof Weapon) {
          hasWeapon = true;
        }
      }
      let tileDiv = document.createElement("div");
      tileDiv.classList.add("tile", "row_" + tile.y);
      if (hasObstacle) {
        tileDiv.classList.add("obstacle");
      }
      if (hasWeapon) {
        tileDiv.classList.add("weapon");
        tileDiv.style.backgroundColor = tile.items[0].colour;
      }
      gameCanvas.appendChild(tileDiv);
    }
  }
}

const grid = new Grid(10, 10);
grid.init();
grid.addObstacles();
grid.addWeapons();
console.log(grid.map);

displayGrid(grid);
