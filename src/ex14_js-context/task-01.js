const Calculator = {
  curentNum: 0,
  add(a) {
    if (a) {
      this.curentNum += a;
    }
    return this
  },
  subtract(a) {
    if (a) {
      this.curentNum -= a;
    }
    return this;
  },
  divide(a) {
    if (a) {
      this.curentNum /= a;
    }
    return this;
  },
  multiply(a) {
    if (a) {
      this.curentNum *= a;
    }
    return this;
  },
  getResult() {
    return this.curentNum;
  },
  reset() {
    this.curentNum = 0;
    return this
  },
  setState(num) {
    if (num) {
      this.curentNum = num; 
    }
    return this
  },
  fetchData(callback) {
    setTimeout(() => {
      callback(500)
    }, 1000);
  }
};
module.exports = Calculator
