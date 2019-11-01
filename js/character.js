class Character {
  constructor({name, klass, type, weapon, image}) {
    this.name = name;
    this.klass = klass;
    this.type = type;
    this.health = 100;
    this.weapon = weapon;
    this.image = image;
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
    (type = "fire"),
  )),
  (image = "./assets/images/bloom.png")
);

const stella = new Character(
  (name = "Stella"),
  (klass = "fairy"),
  (type = "light"),
  (weapon = new Weapon(
    (name = "Solar Burst"),
    (damage = 5),
    (colour = "yellow"),
    (type = "light"),
  )),
  (image = "./assets/images/stella.png")
);

const flora = new Character(
  (name = "Flora"),
  (klass = "fairy"),
  (type = "nature"),
  (weapon = new Weapon(
    (name = "Floral Whirlpool"),
    (damage = 5),
    (colour = "green"),
    (type = "nature"),
  )),
  (image = "./assets/images/flora.png")
);

const icy = new Character(
  (name = "Icy"),
  (klass = "witch"),
  (type = "ice"),
  (weapon = new Weapon(
    (name = "Ice Attack"),
    (damage = 5),
    (colour = "lightblue"),
    (type = "ice"),
  )),
  (image = "./assets/images/icy.png")
);

const darcy = new Character(
  (name = "Darcy"),
  (klass = "witch"),
  (type = "darkness"),
  (weapon = new Weapon(
    (name = "Vertigo"),
    (damage = 5),
    (colour = "purple"),
    (type = "darkness"),
  )),
  (image = "./assets/images/darcy.png")
);

const stormy = new Character(
  (name = "Stormy"),
  (klass = "witch"),
  (type = "storms"),
  (weapon = new Weapon(
    (name = "Lightning Flash"),
    (damage = 5),
    (colour = "bordeaux"),
    (type = "storms"),
  )),
  (image = "./assets/images/stormy.png")
);

const fairies = [bloom, stella, flora];
// console.log(fairies);

const witches = [icy, darcy, stormy];
// console.log(witches);
