const Calculator = {
  curentNum: 0,
  add: function (a = 0) {
    this.curentNum += a;
    return this
  },
  subtract: function (a = 0) {
    this.curentNum -= a;
    return this
  },
  divide: function (a = 0) {
    this.curentNum /= a;
    return this
  },
  multiply: function (a = 0) {
    this.curentNum *= a;
    return this
  },
  getResult:function(){
    return this.curentNum;
  },
  reset:function(){
    this.curentNum = 0
    return this.curentNum;
  },
  setSuccesState() {
    Calculator.curentNum = 500
  },
  fetchData(callback) {
    setTimeout(() => {
      callback()
    },1000 )
  }
}