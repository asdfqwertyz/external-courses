'use strict'
function getMaxDigit(arr) {
  let maxDigitArray = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxDigitArray < arr[i]) {
      maxDigitArray = arr[i];
    }
  }
  return maxDigitArray;
}

module.exports = getMaxDigit
