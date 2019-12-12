class Player {
  constructor(id, character, tile) {
    this.id = id;
    this.character = character;
    this.tile = tile;
    this.possibleMoves = [];
  }

  setCharacter(species) {
    this.character = species[Math.floor(Math.random() * species.length)];
  }

  setSurroundings(directions, steps = 3) {
    this.possibleMoves = [];
    let surroundings = [];
    for (const dir in directions) {
      let currentPosition = getPosition(this.tile.x, this.tile.y);
      let nextPosition;
      let tile;
      let tileID;
      for (let n = 0; n < steps; n++) {
        nextPosition = getPosition(
          currentPosition.x + directions[dir].x,
          currentPosition.y + directions[dir].y
        );
        tileID = nextPosition.x + "_" + nextPosition.y;
        tile = grid.tiles.find(tile => {
          return tile.id === tileID;
        });
        if (tile !== undefined) {
          surroundings.push(tile);
        }
        if (tile !== undefined && !tile.blocked) {
          this.possibleMoves.push(tile);
        } else {
          break;
        }
        currentPosition = nextPosition;
      }
    }
    return surroundings;
  }

  checkMove($event) {
    let tile;
    let validMove = false;
    for (let n = 0; n < this.possibleMoves.length; n++) {
      tile = this.possibleMoves[n];
      // check the element's id or (if img with weapon) the parent's id
      if (
        tile.id === $event.target.id ||
        tile.id === $event.target.parentNode.id
      ) {
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

  move(grid, toTile) {
    grid.removeItem(this);
    grid.addItem(this, toTile);
    this.tile = toTile;
  }

  attack(opponent) {
    let health = (opponent.character.health -= this.character.weapon.damage);
    health = health < 0 ? 0 : health;
    return health;
  }
}
