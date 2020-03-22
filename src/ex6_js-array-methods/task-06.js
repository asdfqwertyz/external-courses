'use strict'
function reduce(array, callback, initialValue) {
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
    previousValue = callback(previousValue, array[i], i, array);
  }
  return previousValue;
}
module.exports = reduce
