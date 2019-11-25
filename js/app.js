startGame();

console.log(grid.map);
player1.setPossibleMoves(directions);
player2.setPossibleMoves(directions);

const gameDiv = document.getElementById("game");
gameDiv.addEventListener("click", function(event) {
  const validTile = player2.checkMove(event);
  if (validTile) {
    if (validTile.items[0] instanceof Weapon) {
      swapWeapons(validTile);
    } 
    const fromTileEl = document.getElementById(`${player2.tile.id}`);
    const toTileEl = document.getElementById(`${validTile.id}`);

    const previousTile = player2.tile;

    player2.move(previousTile, validTile);
    if (previousTile.items[0] instanceof Weapon) {
      displayTile(fromTileEl, previousTile, "");
    } else {
      displayTile(fromTileEl, previousTile, "remove");
    }
    displayTile(toTileEl, validTile, "");
  }
});


