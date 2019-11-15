startGame();
// grid.removeItem(player1, freeTiles);

console.log(gameMap);
player1.setPossibleMoves(directions);
player2.setPossibleMoves(directions);

console.log(player2);

const gameDiv = document.getElementById("game");
gameDiv.addEventListener("click", function(event) {
  const validTile = player2.checkMove(event);
  if (validTile) {
    player2.move(player2.tile, validTile);
  }
});

