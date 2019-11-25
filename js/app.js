startGame();

console.log(grid.map);
player1.setPossibleMoves(directions);
player2.setPossibleMoves(directions);

console.log(player1, player2);

const gameDiv = document.getElementById("game");
gameDiv.addEventListener("click", function(event) {
  const validTile = player2.checkMove(event);
  if (validTile) {
    player2.move(player2.tile, validTile);
  }
});

