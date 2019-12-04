function startGame(grid) {
  // initializes the grid
  grid.initMap();

  // adds obstacles
  for (let n = 0; n < grid.numberOfObstacles; n++) {
    let freeTiles = grid.getFreeTiles();
    grid.addItem(obstacles[n], freeTiles[getRandomIndex(freeTiles)]);
  }

  // adds weapons
  for (let n = 0; n < weapons.length; n++) {
    let freeTiles = grid.getFreeTiles();
    grid.addItem(weapons[n], freeTiles[getRandomIndex(freeTiles)]);
  }

  // adds players / characters
  for (let n = 0; n < players.length; n++) {
		let freeTiles = grid.getFreeTiles();
		if (n >= 1) {
			let player1 = grid.items.find(item => {
				return item.id === "player1";
			});
			let directSurroundings = player1.setSurroundings(directions, 1);
			for (i = 0; i < directSurroundings.length; i++) {
				let tile = freeTiles.find(tile => {
					return tile.id === directSurroundings[i].id;
				});
				let index = freeTiles.indexOf(tile);
				freeTiles.splice(index, 1);
			}
		}
    grid.addItem(players[n], freeTiles[getRandomIndex(freeTiles)]);
	}
	
  grid.displayGrid();
};

function displayFight(grid, players) {
	const body = document.getElementsByTagName("body")[0];
	body.style.backgroundColor = "black";
	body.removeChild(grid);
	const fightDiv = createElement("div", "fightDiv", [], "");
	body.prepend(fightDiv);

	for (let i = 0; i < players.length; i++) {
		displayPlayer(fightDiv, players[i], i + 1);
		displayStats(body, players[i], i + 1);
	}
};

function displayPlayer(element, player, index) {
	const playerEl = createElement("img", "player" + index, ["playerF"], player.character.imageF);
	element.appendChild(playerEl);
}

function displayStats(element, player, index) {
	const statsWrapper = createElement("div", "wrapper" + index, ["wrapper"]);
	const statsDiv = createElement("div", "statPlayer" + index, ["stats"]);
	const thumb = createElement("img", "imgPlayer" + index, ["statsImg"], player.character.image);
	const statsName = createElement("h3", "player" + index + "Name", ["statsName"]);
	const statsHealth = createElement("p", "player" + index + "Health", ["statsHealth"]);
	const attackBtn = createElement("button", "attackBtn" + index, ["btn", "attackBtn"]);
	const defendBtn = createElement("button", "defendBtn" + index, ["btn", "defendBtn"]);
	statsName.innerHTML = "Player " + index + ": " + player.character.name;
	statsHealth.innerHTML = "Health: " + player.character.health;
	attackBtn.innerHTML = "Attack";
	defendBtn.innerHTML = "Defend";
	statsDiv.appendChild(thumb);
	statsDiv.appendChild(statsName);
	statsDiv.appendChild(statsHealth);
	statsDiv.appendChild(attackBtn);
	statsDiv.appendChild(defendBtn);
	statsWrapper.appendChild(statsDiv);
	if (index % 2 === 0) {
		element.appendChild(statsWrapper);
	} else {
		element.prepend(statsWrapper);
	}
}