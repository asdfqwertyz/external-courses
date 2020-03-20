'use strict'
function every(array, callback){
  let arrBool = [];
  let item;
  for (let i = 0; i < array.length; i++) {
    item = array[i];
    arrBool.push(callback(item, i, array))
  }
  if (arrBool.includes(false)) {
    return false;
  }
  return true;
}
module.exports = every