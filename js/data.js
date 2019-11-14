const grid = new Grid(10, 10);
let gameMap = [];
let freeTiles = [];

// OBSTACLE
let obstacles = [];
for (let n = 0; n < grid.numberOfObstacles; n++) {
  const obstacle = new Obstacle(
    id = "obstacle" + n,
    image = "./assets/images/rock.png"
  );
  obstacles.push(obstacle);
}

// WEAPONS

const dragonFlame = new Weapon({
  id: "dragonFlame",
  name: "Dragon Flame",
  damage: 10,
  colour: "orange",
  type: "fire",
  image: "./assets/images/dragon.png"
});
const ringOfSolaria = new Weapon({
  id: "ringOfSolaria",
  name: "Ring of Solaria",
  damage: 9,
  colour: "yellow",
  type: "light",
  image: "./assets/images/ring.png"
});
const lilo = new Weapon({
  id: "lilo",
  name: "Lilo",
  damage: 7,
  colour: "green",
  type: "nature",
  image: "./assets/images/lilo.png"
});

const iceCrystal = new Weapon({
  id: "iceVacuum",
  name: "Ice Vacuum",
  damage: 8,
  colour: "lightblue",
  type: "ice",
  image: "./assets/images/icy_vacuum.png"
});

const weapons = [dragonFlame, ringOfSolaria, iceCrystal, lilo];

// CHARACTERS

const bloom = new Character({
  id: "bloom",
  name: "Bloom",
  klass: "fairy",
  type: "fire",
  image: "./assets/images/bloom.png",
  weapon: new Weapon({
    id: "fireBlast",
    name: "Fire Blast",
    damage: 5,
    colour: "orange",
    type: "fire"
  })
});

const stella = new Character({
  id: "stella",
  name: "Stella",
  klass: "fairy",
  type: "light",
  image: "./assets/images/stella.png",
  weapon: new Weapon({
    id: "solarBurst",
    name: "Solar Burst",
    damage: 5,
    colour: "yellow",
    type: "light"
  })
});

const flora = new Character({
  id: "flora",
  name: "Flora",
  klass: "fairy",
  type: "nature",
  image: "./assets/images/flora.png",
  weapon: new Weapon({
    id: "floralWhirlpool",
    name: "Floral Whirlpool",
    damage: 5,
    colour: "green",
    type: "nature"
  })
});

const icy = new Character({
  id: "icy",
  name: "Icy",
  klass: "witch",
  type: "ice",
  image: "./assets/images/icy.png",
  weapon: new Weapon({
    id: "iceAttack",
    name: "Ice Attack",
    damage: 5,
    colour: "lightblue",
    type: "ice"
  })
});

const darcy = new Character({
  id: "darcy",
  name: "Darcy",
  klass: "witch",
  type: "darkness",
  image: "./assets/images/darcy.png",
  weapon: new Weapon({
    id: "vertigo",
    name: "Vertigo",
    damage: 5,
    colour: "purple",
    type: "darkness"
  })
});

const stormy = new Character({
  id: "stormy",
  name: "Stormy",
  klass: "witch",
  type: "storms",
  image: "./assets/images/stormy.png",
  weapon: new Weapon({
    id: "lightningFlash",
    name: "Lightning Flash",
    damage: 5,
    colour: "bordeaux",
    type: "storms"
  })
});

const fairies = [bloom, stella, flora];
const witches = [icy, darcy, stormy];


// PLAYERS

const player1 = new Player(
  id = "player1",
	character = fairies[Math.floor(Math.random() * fairies.length)]
);

const player2 = new Player(
  id = "player2",
	character = witches[Math.floor(Math.random() * witches.length)]
);

const players = [player1, player2];

const directions = {
  "n": [-1, 0],
  "e": [0, 1],
  "s": [1, 0],
  "w": [0, -1]
};
