const body = $(document.body);

// GRID VIEW
function displayGrid(grid) {
  $("#game").css("width", `${grid.gridWidth * 80}px`);

  for (let i = 0; i < grid.tiles.length; i++) {
    let tile = grid.tiles[i];
    let id = `${tile.x}_${tile.y}`;
    let $tileDiv = $(`<div id="${id}" class="tile"></div>`);
    // let tileDiv = createElement("div", id, ["tile"]);
    $tileDiv = displayTile($tileDiv, tile, "create");
    $("#game").append($tileDiv);
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
        tileEl.css("border", "none");
      }
      if (className === "player") {
        source = tile.items.find(item => {
          return item instanceof Player;
        }).character.image;
      } else {
        source = tile.items[0].image;
      }
      $(`<img id="${id}" class="${className}" src="${source}">`).appendTo(
        tileEl
      );
    }
  }
  return tileEl;
}

// FIGHT VIEW
function displayFightScreen(players) {
  const $body = $(document.body);
  $body.css("backgroundColor", "black");
  $("#game").remove();

  const $fightDiv = $(`<div id="fightDiv"></div>`);
  $body.prepend($fightDiv);

  for (let i = 0; i < players.length; i++) {
    displayPlayer($fightDiv, players[i], i + 1);
    displayStats($body, players[i], i + 1, players[i].character.health);
  }
}

function displayPlayer(element, player, index) {
  const $playerEl = $(
    `<img id="player${index}" class="playerF" src="${player.character.imageF}">`
  );
  element.append($playerEl);
}

function displayStats(element, player, index, health) {
  if ($("#wrapper" + index)) {
    $("#wrapper" + index).remove();
  }
  const $statsWrapper = $(`
		<div id="wrapper${index}" class="wrapper">
			<div id="statPlayer${index}" class="stats">
				<img id="imgPlayer${index}" class="statsImg" src="${player.character.image}">
				<h3 id="player${index}Name" class="statsName">
					Player ${index}:  ${player.character.name}
				</h3>
				<p id="player${index}Health" class="statsHealth">
					Health:  ${health}
				</p>
				<button id="attackBtn${index}" class="btn attackBtn">Attack</button>
				<button id="defendBtn${index}" class="btn defendBtn">Defend</button>
			</div>
		</div>
	`);
  if (index % 2 === 0) {
    element.append($statsWrapper);
  } else {
    element.prepend($statsWrapper);
  }
}

function setPlayersButtons(playerRoles) {
  let playerA = playerRoles.attacker;
  let playerD = playerRoles.defender;

  let $playerAttackBtn = $(`#attackBtn${playerA.id}`);
  let $playerDefendBtn = $(`#defendBtn${playerA.id}`);
  let $opponentAttackBtn = $(`#attackBtn${playerD.id}`);
  let $opponentDefendBtn = $(`#defendBtn${playerD.id}`);

  $opponentAttackBtn.attr("disabled", true);
  $opponentDefendBtn.attr("disabled", true);

  return {
    playerAttackBtn: $playerAttackBtn,
    playerDefendBtn: $playerDefendBtn
  };
}

// GAME OVER VIEW
function displayGameOverScreen(player, opponent) {
  const players = [player, opponent];
  const $fightDiv = $("#fightDiv");
  const $gameOverDiv = $(
    `<div id="gameOver" class="gameOver">
			<div id="gameOverTextWrapper">
				<h1 id="gameOverTitle">Game Over</h1>
				<h3 id="gameOverMsg">${player.character.name} won!</h3>
			</div>
			<div id="gameOverBtnWrapper">
				<button id="resetBtn">Play again</button>
			</div>
		</div>`
  );
  $fightDiv.append($gameOverDiv);

  $("#resetBtn").on("click", function click() {
    displayReset();
    resetGame(players);
  });
}

// RESET VIEW TO GRID
function displayReset() {
  $body = $(document.body);
  $body.css("backgroundColor", "hotpink");
  $("#wrapper1").remove();
  $("#wrapper2").remove();
  $("#fightDiv").remove();

  const $gameDiv = $(`<div id="game" class="gameDiv"></div>`);
  body.prepend($gameDiv);
}
