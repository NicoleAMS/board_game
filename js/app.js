startGame(grid);

const gameDiv = document.getElementById("game");
let player;
let turn = true;
let startFight = false;

gameDiv.addEventListener("click", function click(event) {
  takeTurns(event);
  if (startFight) {
    gameDiv.removeEventListener("click", click);
  }
});

function takeTurns(event) {
  if (turn) {
    player = player1;
  } else {
    player = player2;
  }

  player.setSurroundings(directions);

  const validTile = player.checkMove(event);
  if (validTile) {
    if (validTile.items[0] instanceof Weapon) {
      grid.swapWeapons(validTile, player);
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

    let directSurroundings = player.setSurroundings(directions, 1);
    startFight = checkFightMode(directSurroundings) || false;

    turn = !turn;
  }
}

function checkFightMode(surroundings) {
  for (i = 0; i < surroundings.length; i++) {
    if (surroundings[i].items.length > 0) {
      if (surroundings[i].items[0] instanceof Player) {
        console.log("Let's fight!");
        return true;
      }
    }
  }
}



