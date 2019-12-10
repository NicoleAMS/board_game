startGame(grid);

const gameDiv = document.getElementById("game");
const body = document.getElementsByTagName("body")[0];
let turn = true;
let fightMode = false;

gameDiv.addEventListener("click", function click(event) {
  let player = takeTurns(turn, players);
  onPlayerTurn(player, event);
  if (fightMode) {
    // gameDiv.removeEventListener("click", click);
    displayFight(gameDiv, players);
    startFight(players);
  }
});

function startFight(players) {
  turn = !turn;
  let playerA = takeTurns(turn, players);
  let playerD = players.find(player => {
    return player.id !== playerA.id;
  });
  let playerAttackBtn = document.getElementById(`attackBtn${playerA.id}`);
  let playerDefendBtn = document.getElementById(`defendBtn${playerA.id}`);
  let opponentAttackBtn = document.getElementById(`attackBtn${playerD.id}`);
  let opponentDefendBtn = document.getElementById(`defendBtn${playerD.id}`);
  playerAttackBtn.disabled = false;
  playerDefendBtn.disabled = false;
  opponentAttackBtn.disabled = true;
  opponentDefendBtn.disabled = true;

  playerAttackBtn.addEventListener("click", function clickAttack() {
    playerD.character.health = playerA.attack(playerD);
    displayStats(body, playerD, playerD.id, playerD.character.health);
    if (playerD.character.health > 0) {
      startFight(players);
    } else {
      playerAttackBtn.disabled = true;
      playerDefendBtn.disabled = true;
    }
    playerAttackBtn.removeEventListener("click", clickAttack);
  });

  playerDefendBtn.addEventListener("click", function clickDefend() {
    playerA.character.health += (playerD.character.weapon.damage / 2);
    startFight(players);
    playerDefendBtn.removeEventListener("click", clickDefend);
  });
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



