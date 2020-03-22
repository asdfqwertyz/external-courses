'use strict'
function filter(array, callback) {
  let arrTrueItems = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      arrTrueItems.push(array[i]);
    }
  }
  return arrTrueItems;
}
module.exports = filter
