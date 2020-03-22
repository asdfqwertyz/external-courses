'use strict'
function map(array, callback) {
  let newArr = [];
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}
module.exports = map
