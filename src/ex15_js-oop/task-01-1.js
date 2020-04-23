class electricalAppliances {
  constructor(title, color, power, isInclude) {
    this.title = title;
    this.color = color;
    this.power = power;
    this.isInclude = isInclude;
  }
}

class Fridge extends electricalAppliances {
  constructor(name, color, power, isInclude, capacity, price) {
    super(name, color, power, isInclude);
    this.price = price;
    this.capacity = capacity + " л";
  }
}

class Tv extends electricalAppliances {
  constructor(name, color, power, isInclude, diagonal, price) {
    super(name, color, power, isInclude);
    this.price = price;
    this.diagonal = diagonal + " дюймов";
  }
}

class Luster extends electricalAppliances {
  constructor(name, color, power, isInclude, country, price) {
    super(name, color, power, isInclude);
    this.country = country;
    this.price = price;
  }
}

class Room {
  constructor(title, appliances) {
    this.title = title;
    this.appliances = appliances;
  }
  computeCapacityPower() {
    let power = 0;
    for (let index = 0; index < this.appliances.length; index++) {
      power += this.appliances[index].power;
    }
    return power + " Вт";
  }
}
const searchDevice = function(name, flat) {
  for (let i = 0; i < flat.length; i++) {
    for (let j = 0; j < flat[i].appliances.length; j++) {
      if (flat[i].appliances[j].title === name) {
        return `Устройство '${name}' находится в (на) ${flat[i].room}е`;
      }
    }
  }
  return `Устройство не найдено!`;
};
const kitchenFridge = new Fridge("LG", "white", 200, true, 384, 40000);
const kitchenTv = new Tv("Samsung", "black", 150, true, 40, 30000);
const kitchenLuster = new Luster(
  "Vele Luce Avvenente",
  "black",
  50,
  true,
  "Italy",
  15000
);
const hallTv = new Tv("Dexp", "white", 120, true, 35, 28000);
const hallLuster = new Luster(
  "Vele Luce Intenso",
  "chrome",
  40,
  false,
  "Italy",
  13000
);
const kitchen = new Room("Кухня", [kitchenFridge, kitchenLuster, kitchenTv]);
const hall = new Room("Зал", [hallLuster, hallTv]);
const flat = [
  {
    room: kitchen.title,
    appliances: kitchen.appliances
  },
  {
    room: hall.title,
    appliances: hall.appliances
  }
];
console.log(searchDevice('Vele Luce Intenso', flat))
