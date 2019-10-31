class Weapon {
  constructor(name, damage, colour, type) {
    this.name = name;
    this.damage = damage;
    this.colour = colour;
    this.type = type;
  }
}

const dragonFlame = new Weapon(
  (name = "Dragon Flame"),
  (damage = 10),
  (colour = "orange"),
  (type = "fire")
);
const ringOfSolaria = new Weapon(
  (name = "Ring of Solaria"),
  (damage = 9),
  (colour = "yellow"),
  (type = "light")
);
const iceCrystal = new Weapon(
  (name = "Ice Crystal"),
  (damage = 8),
  (colour = "blue"),
  (type = "ice")
);
const autumnWind = new Weapon(
  (name = "Autumn Wind"),
  (damage = 7),
  (colour = "brown"),
  (type = "air")
);

const weapons = [dragonFlame, ringOfSolaria, iceCrystal, autumnWind];
