class Tile {
  constructor(id, x, y) {
    this.id = id;
    // this.x = x;
    // this.y = y;
    this.location = [x, y];
    this.availableTiles = [];
    this.blocked = false;
    this.items = [];
  }
}
