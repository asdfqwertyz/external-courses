'use strict'
const Calculator = {
  curentNum: 0,
  add: function (a = 0) {
    this.curentNum += a;
    return b => this.add(b);
  },
  substact: function (a = 0) {
    this.curentNum -= a;
    return b => this.substact(b);
  },
  divide: function (a = 0) {
    this.curentNum /= a;
    return b => this.divide(b);
  },
  multiply: function (a = 0) {
    this.curentNum *= a;
    return b => this.multiply(b);
  },
  getResult:function(){
    return this.curentNum;
  },
  reset:function(){
    this.curentNum = 0
    return this.curentNum;
  }
}
module.exports(Calculator)
