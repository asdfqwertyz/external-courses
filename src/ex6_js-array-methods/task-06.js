'use strict'
function reduce(array, callback, initialValue) {
  let currentItem;
  let previousValue;
  let beginNum;
  if (initialValue !== undefined) {
    previousValue = initialValue;
    beginNum = 0;
  } else {
    previousValue = array[0];
    beginNum = 1;
  }
  for (let i = beginNum; i < array.length; i++) {
    currentItem = array[i];
    previousValue = callback(previousValue, currentItem, i, array);
  }
  return previousValue;
}
module.exports = reduce