'use strict'
function getNumOfOddEvenZero(arr) {
  let arrOfOddEvenZero = [0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] % 2 === 0 && arr[i] !== 0) {
        arrOfOddEvenZero[0]++;
      }
      if (arr[i] % 2 === -1 || arr[i] % 2 === 1) {
        arrOfOddEvenZero[1]++;
      }
    }
    if (arr[i] === 0) {
      arrOfOddEvenZero[2]++;
    }
  }
  return arrOfOddEvenZero;
}
module.exports = getNumOfOddEvenZero
