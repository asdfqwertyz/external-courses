'use strict'
function filter(array, callback) {
  let arrTrueItems = [];
  let item;
  for (let i = 0; i < array.length; i++) {
    item = array[i];
    if (callback(item, i, array) === true) {
      arrTrueItems.push(item);
    }
  }
  return arrTrueItems;
}
module.exports = filter