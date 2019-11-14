class Player {
  constructor(id, character, tile) {
    this.id = id;
    this.character = character;
    this.tile = tile;
    this.availableMoves = [];
  }

  setAvailableMoves(directions) {
		this.availableMoves = [];
		for (const dir in directions) {
			let tileXY;
			let tile;
			let currentPosition = this.tile.location;
			for (let n = 0; n < 3; n++) {
				tileXY = [currentPosition[0] + directions[dir][0], currentPosition[1] + directions[dir][1]];
				let tileId = tileXY[0] + "_" + tileXY[1];
				tile = grid.tiles.find(tile => {
					return tile.id === tileId;
				});
				if (tile !== undefined && !tile.blocked) {
					this.availableMoves.push(tile);
				} else {
					break;
				}
				currentPosition = tileXY;
			}
		}
    console.log(this);
  }
}
