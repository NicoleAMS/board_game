class Weapon {
  constructor(name, damage, colour, type, image) {
    this.name = name;
    this.damage = damage;
    this.colour = colour;
    this.type = type;
    this.image = image;
  }
}

const dragonFlame = new Weapon(
  (name = "Dragon Flame"),
  (damage = 10),
  (colour = "orange"),
  (type = "fire"),
  (image = "./assets/images/dragon.png")
);
const ringOfSolaria = new Weapon(
  (name = "Ring of Solaria"),
  (damage = 9),
  (colour = "yellow"),
  (type = "light"),
  (image = "./assets/images/ring.png")
);
const autumnWind = new Weapon(
  (name = "Lilo"),
  (damage = 7),
  (colour = "green"),
  (type = "nature"),
  (image = "./assets/images/lilo.png")
);

const iceCrystal = new Weapon(
  (name = "Ice Vacuum"),
  (damage = 8),
  (colour = "lightblue"),
  (type = "ice"),
  (image = "./assets/images/icy_vacuum.png")
);

const weapons = [dragonFlame, ringOfSolaria, iceCrystal, autumnWind];
