class Player {
  constructor(id, character, tile) {
    this.id = id;
    this.character = character;
    this.tile = tile;
    this.possibleMoves = [];
  }

  setPossibleMoves(directions) {
    this.possibleMoves = [];
    for (const dir in directions) {
      let currentPosition = getPosition(this.tile.x, this.tile.y);
      let nextPosition;
			let tile;
			let tileID;
      for (let n = 0; n < 3; n++) {
        nextPosition = getPosition(
          currentPosition.x + directions[dir].x,
          currentPosition.y + directions[dir].y
        );
        tileID = nextPosition.x + "_" + nextPosition.y;
        tile = grid.tiles.find(tile => {
          return tile.id === tileID;
        });
        if (tile !== undefined && !tile.blocked) {
          this.possibleMoves.push(tile);
        } else {
          break;
        }
        currentPosition = nextPosition;
      }
    }
  }

  checkMove(event) {
    let tile;
    let validMove = false;
    for (let n = 0; n < this.possibleMoves.length; n++) {
      tile = this.possibleMoves[n];
      // check the element's id or (if img with weapon) the parent's id
      if (tile.id === event.target.id || tile.id === event.path[1].id) {
        validMove = true;
        break;
      } else {
        validMove = false;
      }
    }
    if (validMove) {
      return tile;
    }
  }

  move(fromTile, toTile) {
    console.log(fromTile, toTile);
    // remove player from fromTile's items
    // add player to toTile's items
    this.tile = toTile;
    this.setPossibleMoves(directions);
    console.log(this);
  }
}
