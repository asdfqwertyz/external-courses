'use strict'
const Calculator = {
  curentNum:0,
  add:function(a = 0){
    Calculator.curentNum+= a;
    function f(b = 0) {
      Calculator.curentNum += b;
      return f;
    }
    f.toString = function(){
      return Calculator.curentNum;
    };
    return f;
  },
  substract:function(a = 0){
    Calculator.curentNum-= a;
    function f(b = 0) {
      Calculator.curentNum -= b;
      return f;
    }
    f.toString = function(){
      return Calculator.curentNum;
    };
    return f;
  },
  divide:function(a = 0){
    Calculator.curentNum/= a;
    function f(b = 0) {
      Calculator.curentNum /= b;
      return f;
    }
    f.toString = function(){
      return Calculator.curentNum;
    };
    return f;
  },
  multiply:function(a = 0) {
    Calculator.curentNum*= a;
    function f(b = 0) {
      Calculator.curentNum *= b;
      return f;
    }
    f.toString = function(){
      return Calculator.curentNum;
    };
    return f;
  },
  getResult:function(){
    return Calculator.curentNum
  },
  reset:function(){
    Calculator.curentNum = 0
    return Calculator.curentNum
  }
}