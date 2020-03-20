'use strict'
function map(array, callback) {
  let newArr = [];
  let arr = [...array];
  let item;
  for (let i = 0; i < arr.length; i++) {
    item = arr[i];
    newArr.push(callback(item, i, arr));
  }
  return newArr;
}
module.exports = map