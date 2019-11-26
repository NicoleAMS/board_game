startGame(grid);

const gameDiv = document.getElementById("game");
let player;
let turn = true;

gameDiv.addEventListener("click", function(event) {
  if (turn) {
    player = player1;
  } else {
    player = player2;
  }

  player.setPossibleMoves(directions);

  const validTile = player.checkMove(event);
  if (validTile) {
    if (validTile.items[0] instanceof Weapon) {
      swapWeapons(grid, validTile, player);
    } 
    const fromTileEl = document.getElementById(`${player.tile.id}`);
    const toTileEl = document.getElementById(`${validTile.id}`);

    const previousTile = player.tile;

    player.move(grid, validTile);
    if (previousTile.items[0] instanceof Weapon) {
      displayTile(fromTileEl, previousTile, "");
    } else {
      displayTile(fromTileEl, previousTile, "remove");
    }
    displayTile(toTileEl, validTile, "");

    turn = !turn;
  }

});



