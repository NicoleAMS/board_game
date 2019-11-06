class Grid {
  constructor(gridWidth = 10, gridHeight = 10) {
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.numberOfObstacles = Math.floor(gridWidth * gridHeight * 0.2);
  }

  init(map, tiles) {
    for (let x = 0; x < this.gridHeight; x++) {
      map.push([]);
      for (let y = 0; y < this.gridWidth; y++) {
        let tile = new Tile(x, y);
        tiles.push(tile);
        map[x].push({
          tile: tile
        });
      }
    }
  }

  addItem(item, tiles) {
    let randomIndex = Math.floor(Math.random() * tiles.length);
    let chosenTile = tiles[randomIndex];
    if (item instanceof Obstacle || item instanceof Player) {
      chosenTile.blocked = true;
    }
    chosenTile.items.push(item);
    item.tile = chosenTile;
    tiles.splice(randomIndex, 1);
  }

}

function displayGrid(grid, map) {
  const gameCanvas = document.getElementById("game");
  gameCanvas.style.width = `${grid.gridWidth * 80}px`;

  for (row in map) {
    for (column in map[row]) {
      let tile = map[row][column].tile;
      let tileDiv = createElement("div", ["tile", "row_" + tile.y]);
      tileDiv = displayTile(tileDiv, tile);
      gameCanvas.appendChild(tileDiv);
    }
  }
}

function displayTile(tileEl, tile) {
  let className;
  let source;
  for (item in tile.items) {
    className = tile.items[item].constructor.name.toLowerCase();
  }
  if (className) {
    if (className === "obstacle") {
      tileEl.style.border = "none";
    }
    if (className === "player") {
      source = tile.items[0].character.image;
    } else {
      source = tile.items[0].image;
    }
    let image = createElement("img", [className], source);
    tileEl.appendChild(image);
  }
  return tileEl;
}

function createElement(el, classNames, source) {
  let element = document.createElement(el);
  for (i = 0; i < classNames.length; i++) {
    element.classList.add(classNames[i]);
  } if (source) {
    element.src = source;
  }
  return element;
}



// function displayGrid(grid, map) {
//   const gameCanvas = document.getElementById("game");
//   gameCanvas.style.width = `${grid.gridWidth * 80}px`;
//   console.log(Weapon.name.toLowerCase());

//   for (row in map) {
//     for (column in map[row]) {
//       let tile = map[row][column].tile;
//       let hasObstacle = tile.blocked;
// 			let hasWeapon = false;
// 			let hasPlayer = false;
//       for (item in tile.items) {
//         console.log(tile.items[item].constructor.name.toLowerCase());
//         if (tile.items[item] instanceof Weapon) {
//           hasWeapon = true;
//         } else if (tile.items[item] instanceof Player) {
// 					hasPlayer = true;
// 				}
//       }
//       let tileDiv = document.createElement("div");
//       tileDiv.classList.add("tile", "row_" + tile.y);
//       if (hasObstacle) {
//         tileDiv.classList.add("obstacle");
//       }
//       if (hasWeapon) {
//         let weaponDiv = document.createElement("img");
//         weaponDiv.src = tile.items[0].image;
//         weaponDiv.classList.add("weapon");
// 				tileDiv.appendChild(weaponDiv);
// 			}
// 			if (hasPlayer) {
//         let gamePiece = document.createElement("img");
//         gamePiece.src = tile.items[0].character.image;
// 				gamePiece.classList.add("gamepiece");
//         tileDiv.appendChild(gamePiece);
// 			}
//       gameCanvas.appendChild(tileDiv);
//     }
//   }
// }
