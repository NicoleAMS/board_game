class Character {
  constructor(name, klass, type, weapon) {
    this.name = name;
    this.klass = klass;
    this.type = type;
    this.health = 100;
    this.weapon = weapon;
  }
}

const bloom = new Character(
  (name = "Bloom"),
  (klass = "fairy"),
  (type = "fire"),
  (weapon = new Weapon(
    (name = "Fire Blast"),
    (damage = 5),
    (colour = "orange"),
    (type = "fire")
  ))
);

const stella = new Character(
  (name = "Stella"),
  (klass = "fairy"),
  (type = "light"),
  (weapon = new Weapon(
    (name = "Solar Burst"),
    (damage = 5),
    (colour = "yellow"),
    (type = "light")
  ))
);

const flora = new Character(
  (name = "Flora"),
  (klass = "fairy"),
  (type = "nature"),
  (weapon = new Weapon(
    (name = "Floral Whirlpool"),
    (damage = 5),
    (colour = "green"),
    (type = "nature")
  ))
);

const icy = new Character(
  (name = "Icy"),
  (klass = "witch"),
  (type = "ice"),
  (weapon = new Weapon(
    (name = "Ice Attack"),
    (damage = 5),
    (colour = "lightblue"),
    (type = "ice")
  ))
);

const darcy = new Character(
  (name = "Darcy"),
  (klass = "witch"),
  (type = "darkness"),
  (weapon = new Weapon(
    (name = "Vertigo"),
    (damage = 5),
    (colour = "purple"),
    (type = "darkness")
  ))
);

const stormy = new Character(
  (name = "Stormy"),
  (klass = "witch"),
  (type = "storms"),
  (weapon = new Weapon(
    (name = "Lightning Flash"),
    (damage = 5),
    (colour = "bordeaux"),
    (type = "storms")
  ))
);

const fairies = [bloom, stella, flora];
// console.log(fairies);

const witches = [icy, darcy, stormy];
// console.log(witches);
