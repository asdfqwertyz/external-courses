'use strict'
function some(array, callback) {
  let arrBool = [];
  let item;
  for (let i = 0; i < array.length; i++) {
    item = array[i];
    arrBool.push(callback(item, i, array))
  }
  if (arrBool.includes(true)) {
    return true;
  }
  return false;
}
module.exports = some