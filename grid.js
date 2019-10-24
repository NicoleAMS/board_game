class Grid {
    constructor(gridWidth = 10, gridHeight = 10) {
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.numberOfObstacles = Math.floor((gridWidth * gridHeight) * 0.2);
        this.map = [];
        this.tiles = [];
    }
    init() {
        for (let y = 0; y < this.gridHeight; y++) {
            this.map.push([]);
            for (let x = 0; x < this.gridWidth; x++) {
                let tile = new Tile(y, x);
                this.tiles.push(tile);
                this.map[y].push({
                    tile: tile
                });
            }
        }
    }
}

function displayGrid(grid) {
    let gameCanvas = document.getElementById("game");
    gameCanvas.style.width = `${grid.gridWidth * 60}px`;
    
    for (row in grid.map) {
        for (column in grid.map[row]) {
            let tile = grid.map[row][column].tile;
            let tileDiv = document.createElement("div");
            tileDiv.classList.add("tile", "row_" + tile.y);
            gameCanvas.appendChild(tileDiv);
        }
    }
}

const grid = new Grid(15, 15);
grid.init();


displayGrid(grid);