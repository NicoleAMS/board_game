let turn = true;
let fightMode = false;

function playGame() {
  // should take players, grid

  player1.setCharacter(fairies);
  player2.setCharacter(witches);

  grid.createGrid(); // view.js
  displayGrid(grid);

	// const gameDiv = document.getElementById("game");

  $("#game").on("click", function click($event) {
    let player = takeTurns(turn, players); // helper_functions.js
    onPlayerTurn(player, $event); // app.js
    if (fightMode) {
      displayFightScreen(players); // view.js
      startFight(players); // app.js
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
		fightMode = checkFightMode(directSurroundings) || false; // app.js

		turn = !turn;
	}
}

function checkFightMode(surroundings) {
	for (i = 0; i < surroundings.length; i++) {
		if (surroundings[i].items.length > 0) {
			if (surroundings[i].items[0] instanceof Player) {
				return true;
			}
		}
	}
}

function startFight(players) {
	const playerRoles = setPlayersRoles(players); // app.js
	const buttons = setPlayersButtons(playerRoles); //view.js
	fight(
		playerRoles.attacker,
		playerRoles.defender,
		buttons.playerAttackBtn,
		buttons.playerDefendBtn
	); // app.js
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
  // should take grid
  grid = new Grid();

  // reset characters
  for (i = 0; i < players.length; i++) {
    let weapon = defaultWeapons.find(weapon => {
      return weapon.type === players[i].character.type;
    });
    players[i].character.resetCharacter(weapon);
  }

  playGame();
}
