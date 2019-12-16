let turn = true;
let fightMode = false;

function playGame() {
  // should take players, grid

  player1.setCharacter(fairies);
  player2.setCharacter(witches);

  grid.createGrid(); // view.js
  displayGrid(grid);

  $("#game").on("click", function click($event) {
    let player = takeTurns(turn, players); // helper_functions.js
    onPlayerTurn(player, $event); // game_controller.js
    if (fightMode) {
      displayFightScreen(players); // view.js
      startFight(players); // game_controller.js
    }
  });
}

function onPlayerTurn(player, $event) {
  player.setSurroundings(directions);

  const validTile = player.checkMove($event);
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
    fightMode = checkFightMode(directSurroundings) || false; // game_controller.js

    turn = !turn;
  }
}

function checkFightMode(surroundings) {
  for (i = 0; i < surroundings.length; i++) {
    let numberOfItems = surroundings[i].items.length;
    if (numberOfItems > 0) {
      for (n = 0; n < numberOfItems; n++) {
        if (surroundings[i].items[n] instanceof Player) {
          return true;
        }
      }
    }
  }
}

function startFight(players) {
  const playerRoles = setPlayersRoles(players); // game_controller.js
  const buttons = setPlayersButtons(playerRoles); //view.js
  fight(
    playerRoles.attacker,
    playerRoles.defender,
    buttons.playerAttackBtn,
    buttons.playerDefendBtn
  ); // game_controller.js
}

function setPlayersRoles(players) {
  turn = !turn;
  let playerA = takeTurns(turn, players); // helper_functions.js
  let playerD = players.find(player => {
    return player.id !== playerA.id;
  });
  return { attacker: playerA, defender: playerD };
}

function fight(playerA, playerD, $playerAttackBtn, $playerDefendBtn) {
  $playerAttackBtn.on("click", function clickAttack() {
    playerD.character.health = playerA.attack(playerD);
    displayStats(body, playerD, playerD.id, playerD.character.health);
    if (playerD.character.health > 0) {
      startFight(players);
    } else {
      $playerAttackBtn.disabled = true;
      $playerDefendBtn.disabled = true;
      displayGameOverScreen(playerA, playerD);
    }
    $playerAttackBtn.off("click", clickAttack);
  });

  $playerDefendBtn.on("click", function clickDefend() {
    playerA.character.health += playerD.character.weapon.damage / 2;
    startFight(players);
    $playerDefendBtn.off("click", clickDefend);
  });
}

function resetGame(players) {
  // reset characters
  for (i = 0; i < players.length; i++) {
    let weapon = defaultWeapons.find(weapon => {
      return weapon.type === players[i].character.type;
    });
    players[i].character.resetCharacter(weapon);
  }

  grid = new Grid();
  fightMode = false;
  turn = true;

  playGame();
}
