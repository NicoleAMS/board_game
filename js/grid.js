class Grid {
  constructor(gridWidth = 10, gridHeight = 10) {
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.numberOfObstacles = Math.floor(gridWidth * gridHeight * 0.2);
    this.map = [];
    this.tiles = [];
    this.items = [];
  }

  initMap() {
    for (let x = 0; x < this.gridHeight; x++) {
      this.map.push([]);
      for (let y = 0; y < this.gridWidth; y++) {
        let tile = new Tile(x + "_" + y, x, y);
        this.map[x].push({
          tile: tile
        });
        this.tiles.push(tile);
      }
    }
  }

  getFreeTiles() {
    let tiles = [];
    for (let i = 0; i < this.tiles.length; i++) {
      let tile = this.tiles[i];
      if (tile.items.length === 0) {
        tiles.push(tile);
      }
    }
    return tiles;
  }

  addItem(item, tile) {
    if (item instanceof Obstacle || item instanceof Player) {
      tile.blocked = true;
    }
    this.items.push(item);
    tile.items.push(item);
    item.tile = tile;
  }

  removeItem(item) {
    let tile = item.tile;
    for (let i = 0; i < tile.items.length; i++) {
      if (tile.items[i].id === item.id) {
        if (item instanceof Player) {
          tile.blocked = false;
        }
        tile.items.splice(i, 1);
        break;
      }
    }
  }

  displayGrid() {
    const gameCanvas = document.getElementById("game");
    gameCanvas.style.width = `${grid.gridWidth * 80}px`;
  
    for (let i = 0; i < this.tiles.length; i++) {
      let tile = this.tiles[i];
      let id = `${tile.x}_${tile.y}`;
      let tileDiv = createElement("div", id, ["tile"]);
      tileDiv = displayTile(tileDiv, tile, "create");
      gameCanvas.appendChild(tileDiv);
    }
  }

}

function displayTile(tileEl, tile, action) {
  let className;
  let source;
  let id;
  // empty tileEl
  if (tileEl.firstChild) {
    tileEl.firstChild.remove();
  } 
  if (action !== "remove") {
    for (item in tile.items) {
      // console.log(tile.items);
      className = tile.items[item].constructor.name.toLowerCase();
      id = tile.items[item].id;
    }
    if (className) {
      if (className === "obstacle") {
        tileEl.style.border = "none";
      }
      if (className === "player") {
        source = tile.items.find(item => {
          return item instanceof Player;
        }).character.image;
      } else {
        source = tile.items[0].image;
      }
      let image = createElement("img", id, [className], source);
      tileEl.appendChild(image);
    }
  }
  return tileEl;
}