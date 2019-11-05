// WEAPONS

const dragonFlame = new Weapon({
  name: "Dragon Flame",
  damage: 10,
  colour: "orange",
  type: "fire",
  image: "./assets/images/dragon.png"
});
const ringOfSolaria = new Weapon({
  name: "Ring of Solaria",
  damage: 9,
  colour: "yellow",
  type: "light",
  image: "./assets/images/ring.png"
});
const autumnWind = new Weapon({
  name: "Lilo",
  damage: 7,
  colour: "green",
  type: "nature",
  image: "./assets/images/lilo.png"
});

const iceCrystal = new Weapon({
  name: "Ice Vacuum",
  damage: 8,
  colour: "lightblue",
  type: "ice",
  image: "./assets/images/icy_vacuum.png"
});

const weapons = [dragonFlame, ringOfSolaria, iceCrystal, autumnWind];

// CHARACTERS

const bloom = new Character({
  name: "Bloom",
  klass: "fairy",
  type: "fire",
  image: "./assets/images/bloom.png",
  weapon: new Weapon({
    name: "Fire Blast",
    damage: 5,
    colour: "orange",
    type: "fire"
  })
});

const stella = new Character({
  name: "Stella",
  klass: "fairy",
  type: "light",
  image: "./assets/images/stella.png",
  weapon: new Weapon({
    name: "Solar Burst",
    damage: 5,
    colour: "yellow",
    type: "light"
  })
});

const flora = new Character({
  name: "Flora",
  klass: "fairy",
  type: "nature",
  image: "./assets/images/flora.png",
  weapon: new Weapon({
    name: "Floral Whirlpool",
    damage: 5,
    colour: "green",
    type: "nature"
  })
});

const icy = new Character({
  name: "Icy",
  klass: "witch",
  type: "ice",
  image: "./assets/images/icy.png",
  weapon: new Weapon({
    name: "Ice Attack",
    damage: 5,
    colour: "lightblue",
    type: "ice"
  })
});

const darcy = new Character({
  name: "Darcy",
  klass: "witch",
  type: "darkness",
  image: "./assets/images/darcy.png",
  weapon: new Weapon({
    name: "Vertigo",
    damage: 5,
    colour: "purple",
    type: "darkness"
  })
});

const stormy = new Character({
  name: "Stormy",
  klass: "witch",
  type: "storms",
  image: "./assets/images/stormy.png",
  weapon: new Weapon({
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
	character = fairies[Math.floor(Math.random() * fairies.length)]
);

const player2 = new Player(
	character = witches[Math.floor(Math.random() * witches.length)]
);

const players = [player1, player2];