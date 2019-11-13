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

  addItem(item, tiles, index) {
    // let randomIndex = Math.floor(Math.random() * tiles.length);
    let chosenTile = tiles[index];
    if (item instanceof Obstacle || item instanceof Player) {
      chosenTile.blocked = true;
    }
    chosenTile.items.push(item);
    item.tile = chosenTile;
    tiles.splice(index, 1);
  }

  removeItem(item, tiles) {
    let tile = item.tile;
    console.log(tile.items[0]);
  //   tile.items.splice(0, 1);
  //   let element = document.getElementsByClassName("row_" + tile.y + "_col_" + tile.x)[0];
  //   console.log(element);
  //   displayTile(element, tile);
  //   console.log(tiles);
  //   tiles.push(tile);
  //   console.log(tiles);
  }

}

function displayGrid(grid, map) {
  const gameCanvas = document.getElementById("game");
  gameCanvas.style.width = `${grid.gridWidth * 80}px`;

  for (row in map) {
    for (column in map[row]) {
      let tile = map[row][column].tile;
      let id = `x${tile.x}_y${tile.y}`;
      let tileDiv = createElement("div", id, ["tile", "row_" + tile.y + "_col_" + tile.x]);
      tileDiv = displayTile(tileDiv, tile);
      gameCanvas.appendChild(tileDiv);
    }
  }
}

function displayTile(tileEl, tile) {
  let className;
  let source;
  let id;
  for (item in tile.items) {
    className = tile.items[item].constructor.name.toLowerCase();
    id = tile.items[item].name;
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
    let image = createElement("img", id, [className], source);
    tileEl.appendChild(image);
  }
  return tileEl;
}

function createElement(el, id, classNames, source) {
  let element = document.createElement(el);
  element.id = id;
  for (i = 0; i < classNames.length; i++) {
    element.classList.add(classNames[i]);
  } if (source) {
    element.src = source;
  }
  return element;
}
