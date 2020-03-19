"use strict"
function getLowerCamelCase(str){
  let newStr = ""
  let strArr = str.toLowerCase().split(" ")
  newStr += strArr[0][0].toLowerCase() + strArr[0].substring(1)
  for (let i = 1; i < strArr.length; i++){
    if (strArr[i] !== ""){
      newStr += strArr[i][0].toUpperCase() + strArr[i].substring(1)
    }
  }
  return newStr
}
module.exports = getLowerCamelCase
