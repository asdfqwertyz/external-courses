"use strict"
function getInfo(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  console.log("Длина массива = ${arr.length}");
}
module.exports = getInfo
