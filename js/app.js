startGame(grid);

const gameDiv = document.getElementById("game");
let turn = true;
let fightMode = false;

gameDiv.addEventListener("click", function click(event) {
  let player = takeTurns(players);
  onPlayerTurn(player, event);
  if (fightMode) {
    gameDiv.removeEventListener("click", click);
    startFight(players);
  }
});

function startFight(players) {
  consoleLogStats();
  turn = !turn;
  let playerA = takeTurns(players);
  let playerD = players.find(player => {
    return player.id !== playerA.id;
  })
  let playerDHealth = playerA.attack(playerD);
  if (playerDHealth > 0) {
    startFight(players);
  } else {
    console.log("Game Over! \n " + playerA.character.name + " won!");
  }
}

function onPlayerTurn(player, event) {
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
    fightMode = checkFightMode(directSurroundings) || false;

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



