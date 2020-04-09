"use strict"
function getLowerCamelCase(str) {
  let newArr = [];
  newArr.push(str[0].toLowerCase());
  let strArr = str.split('');
  for (let i = 1; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    if (str[i-1] === " ") {
      newArr.push(str[i].toUpperCase());   
    }
    else {
      newArr.push(str[i].toLowerCase());
    }
  }
  return newArr.join('');
}
module.exports = getLowerCamelCase
