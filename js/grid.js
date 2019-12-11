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

  swapWeapons(tile, player) {
    const newWeapon = tile.items[0];
    this.removeItem(tile.items[0]);
    this.addItem(player.character.weapon, tile);
    player.character.weapon = newWeapon;
  }

  createGrid() { // should take weapons, players
    this.initMap();
  
    // adds obstacles
    for (let n = 0; n < this.numberOfObstacles; n++) {
      let freeTiles = this.getFreeTiles();
      this.addItem(obstacles[n], freeTiles[getRandomIndex(freeTiles)]);
    }
  
    // adds weapons
    for (let n = 0; n < weapons.length; n++) {
      let freeTiles = this.getFreeTiles();
      this.addItem(weapons[n], freeTiles[getRandomIndex(freeTiles)]);
    }
  
    // adds players / characters
    for (let n = 0; n < players.length; n++) {
      let freeTiles = this.getFreeTiles();
      if (n >= 1) {
        let player1 = this.items.find(item => {
          return item.id === 1;
        });
        let directSurroundings = player1.setSurroundings(directions, 1);
        for (let i = 0; i < directSurroundings.length; i++) {
          let tile = freeTiles.find(tile => {
            return tile.id === directSurroundings[i].id;
          });
          let index = freeTiles.indexOf(tile);
          freeTiles.splice(index, 1);
        }
      }
      this.addItem(players[n], freeTiles[getRandomIndex(freeTiles)]);
    }
  };

}