const body = document.getElementsByTagName("body")[0];

// GRID VIEW
function displayGrid(grid) {
  const gameCanvas = document.getElementById("game");
  gameCanvas.style.width = `${grid.gridWidth * 80}px`;

  for (let i = 0; i < grid.tiles.length; i++) {
    let tile = grid.tiles[i];
    let id = `${tile.x}_${tile.y}`;
    let tileDiv = createElement("div", id, ["tile"]);
    tileDiv = displayTile(tileDiv, tile, "create");
    gameCanvas.appendChild(tileDiv);
  }
}

function displayTile(tileEl, tile, action) {
  let className;
  let source;
  let id;
  // empty tileEl
  if (tileEl.firstChild) {
    tileEl.firstChild.remove();
  }
  if (action !== "remove") {
    for (item in tile.items) {
      className = tile.items[item].constructor.name.toLowerCase();
      id = tile.items[item].id;
    }
    if (className) {
      if (className === "obstacle") {
        tileEl.style.border = "none";
      }
      if (className === "player") {
        source = tile.items.find(item => {
          return item instanceof Player;
        }).character.image;
      } else {
        source = tile.items[0].image;
      }
      let image = createElement("img", id, [className], source);
      tileEl.appendChild(image);
    }
  }
  return tileEl;
}

// FIGHT VIEW
function displayFightScreen(grid, players) {
  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "black";
  body.removeChild(grid);
  const fightDiv = createElement("div", "fightDiv", [], "");
  body.prepend(fightDiv);

  for (let i = 0; i < players.length; i++) {
    displayPlayer(fightDiv, players[i], i + 1);
    displayStats(body, players[i], i + 1, players[i].character.health);
  }
}

function displayPlayer(element, player, index) {
  const playerEl = createElement(
    "img",
    "player" + index,
    ["playerF"],
    player.character.imageF
  );
  element.appendChild(playerEl);
}

function displayStats(element, player, index, health) {
  if (document.getElementById("wrapper" + index)) {
    const wrapper = document.getElementById("wrapper" + index);
    wrapper.parentNode.removeChild(wrapper);
  }
  const statsWrapper = createElement("div", "wrapper" + index, ["wrapper"]);
  const statsDiv = createElement("div", "statPlayer" + index, ["stats"]);
  const thumb = createElement(
    "img",
    "imgPlayer" + index,
    ["statsImg"],
    player.character.image
  );
  const statsName = createElement("h3", "player" + index + "Name", [
    "statsName"
  ]);
  const statsHealth = createElement("p", "player" + index + "Health", [
    "statsHealth"
  ]);
  const attackBtn = createElement("button", "attackBtn" + index, [
    "btn",
    "attackBtn"
  ]);
  const defendBtn = createElement("button", "defendBtn" + index, [
    "btn",
    "defendBtn"
  ]);
  statsName.innerHTML = "Player " + index + ": " + player.character.name;
  statsHealth.innerHTML = "Health: " + health;
  attackBtn.innerHTML = "Attack";
  defendBtn.innerHTML = "Defend";
  attackBtn.disabled = true;
  defendBtn.disabled = true;
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

function setPlayersButtons(playerRoles) {
  let playerA = playerRoles.attacker;
  let playerD = playerRoles.defender;

  let playerAttackBtn = document.getElementById(`attackBtn${playerA.id}`);
  let playerDefendBtn = document.getElementById(`defendBtn${playerA.id}`);
  let opponentAttackBtn = document.getElementById(`attackBtn${playerD.id}`);
  let opponentDefendBtn = document.getElementById(`defendBtn${playerD.id}`);
  playerAttackBtn.disabled = false;
  playerDefendBtn.disabled = false;
  opponentAttackBtn.disabled = true;
  opponentDefendBtn.disabled = true;

  return { playerAttackBtn: playerAttackBtn, playerDefendBtn: playerDefendBtn };
}

// GAME OVER VIEW
function displayGameOverScreen(player, opponent) {
  const players = [player, opponent];
  const fightDiv = document.getElementById("fightDiv");
  const gameOverDiv = createElement("div", "gameOver", ["gameOver"]);
  gameOverDiv.innerHTML = `
		<div id="gameOverTextWrapper">
			<h1 id="gameOverTitle">Game Over</h1>
			<h3 id="gameOverMsg">${player.character.name} won!</h3>
		</div>
		<div id="gameOverBtnWrapper">
			<button id="resetBtn">Play again</button>
		</div>
	`;
  fightDiv.append(gameOverDiv);

  const btn = document.getElementById("resetBtn");
  btn.addEventListener("click", function click() {
    displayReset();
    resetGame(players);
  });
}

// RESET VIEW TO GRID
function displayReset() {
  const body = document.getElementsByTagName("body")[0];
  const wrapper1 = document.getElementById("wrapper1");
  const wrapper2 = document.getElementById("wrapper2");
  const fightDiv = document.getElementById("fightDiv");
  body.removeChild(fightDiv);
  body.removeChild(wrapper1);
  body.removeChild(wrapper2);
  body.style.backgroundColor = "hotpink";
  const gameDiv = createElement("div", "game", ["gameDiv"]);
  body.prepend(gameDiv);
}
