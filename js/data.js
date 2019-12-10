const grid = new Grid(10, 10);
// let gameMap = [];
// let freeTiles = [];

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
  damage: 20,
  colour: "orange",
  type: "fire",
  image: "./assets/images/dragon.png"
});
const ringOfSolaria = new Weapon({
  id: "ringOfSolaria",
  name: "Ring of Solaria",
  damage: 16,
  colour: "yellow",
  type: "light",
  image: "./assets/images/ring.png"
});
const lilo = new Weapon({
  id: "lilo",
  name: "Lilo",
  damage: 14,
  colour: "green",
  type: "nature",
  image: "./assets/images/lilo.png"
});

const iceCrystal = new Weapon({
  id: "iceVacuum",
  name: "Ice Vacuum",
  damage: 18,
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
  imageF: "./assets/images/bloom_fight.png",
  weapon: new Weapon({
    id: "fireBlast",
    name: "Fire Blast",
    damage: 10,
    colour: "orange",
    type: "fire",
    image: "./assets/images/fire_blast.png"
  })
});

const stella = new Character({
  id: "stella",
  name: "Stella",
  klass: "fairy",
  type: "light",
  image: "./assets/images/stella.png",
  imageF: "./assets/images/stella_fight.png",
  weapon: new Weapon({
    id: "solarBurst",
    name: "Solar Burst",
    damage: 10,
    colour: "yellow",
    type: "light",
    image: "./assets/images/solar_burst.png"
  })
});

const flora = new Character({
  id: "flora",
  name: "Flora",
  klass: "fairy",
  type: "nature",
  image: "./assets/images/flora.png",
  imageF: "./assets/images/flora_fight.png",
  weapon: new Weapon({
    id: "floralWhirlpool",
    name: "Floral Whirlpool",
    damage: 10,
    colour: "green",
    type: "nature",
    image: "./assets/images/floral_whirlpool.png"
  })
});

const icy = new Character({
  id: "icy",
  name: "Icy",
  klass: "witch",
  type: "ice",
  image: "./assets/images/icy.png",
  imageF: "./assets/images/icy_fight.png",
  weapon: new Weapon({
    id: "iceAttack",
    name: "Ice Attack",
    damage: 10,
    colour: "lightblue",
    type: "ice",
    image: "./assets/images/ice_attack.png"
  })
});

const darcy = new Character({
  id: "darcy",
  name: "Darcy",
  klass: "witch",
  type: "darkness",
  image: "./assets/images/darcy.png",
  imageF: "./assets/images/darcy_fight.png",
  weapon: new Weapon({
    id: "vertigo",
    name: "Vertigo",
    damage: 10,
    colour: "purple",
    type: "darkness",
    image: "assets/images/vertigo.png"
  })
});

const stormy = new Character({
  id: "stormy",
  name: "Stormy",
  klass: "witch",
  type: "storms",
  image: "./assets/images/stormy.png",
  imageF: "./assets/images/stormy_fight.png",
  weapon: new Weapon({
    id: "lightningFlash",
    name: "Lightning Flash",
    damage: 10,
    colour: "bordeaux",
    type: "storms",
    image: "assets/images/lightning.png"
  })
});

const fairies = [bloom, stella, flora];
const witches = [icy, darcy, stormy];


// PLAYERS

const player1 = new Player(
  id = 1,
	character = fairies[Math.floor(Math.random() * fairies.length)]
);

const player2 = new Player(
  id = 2,
	character = witches[Math.floor(Math.random() * witches.length)]
);

const players = [player1, player2];


// DIRECTIONS 

const directions = {
  n: {
    x: -1,
    y: 0
  },
  e: {
    x: 0,
    y: 1
  },
  s: {
    x: 1,
    y: 0
  },
  w: {
    x: 0,
    y: -1
  }
};