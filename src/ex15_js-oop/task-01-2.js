function Sweets(title, weigth) {
  this.title = title;
  this.weigth = weigth;
}
Sweets.prototype.getWeigth = function() {
  return this.weigth;
};
Sweets.prototype.setPrice = function(price) {
  this.price = price + " руб";
};
function Candy(length) {
  this.length = length + " см";
}
function Gift(sweets) {
  this.sweets = sweets;
}
Gift.prototype.sortWeight = function() {
  this.sweets.sort(function(a, b) {
    return a.weigth - b.weigth;
  });
  return this.sweets;
};
Gift.prototype.computeWeigth = function() {
  let weigth = this.sweets[0].weigth;
  for (let i = 1; i < this.sweets.length; i++) {
    weigth += this.sweets[i].weigth;
  }
  return weigth;
};
Gift.prototype.searchCandy = function(title) {
  for (let i = 0; i < this.sweets.length; i++) {
    if (this.sweets[i].title === title) {
      return `${title}а есть в подарке`;
    }
  }
  return `${title}а нет в подарке`;
};
Candy.prototype = new Sweets();
let snickers = new Candy(30);
snickers.title = "Сникерс";
snickers.weigth = 100;
snickers.setPrice(50);
let mars = new Candy(10);
mars.title = "Марс";
mars.weigth = 20;
mars.setPrice(35);
let kitkat = new Candy(20);
kitkat.title = "Киткат";
kitkat.weigth = 35;
kitkat.setPrice(60);
kitkat.quantity = 2;
const gift = new Gift([snickers,mars,kitkat])
console.log(gift.computeWeigth())
console.log(gift.searchCandy('Киткат'))
console.log(gift.searchCandy('Твинк'))
