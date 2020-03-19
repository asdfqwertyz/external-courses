'use strict'
function showString(str){
  let newStr = ''
  let strArr = str.split(' ')
  for (let i = 0; i<strArr.length; i++){
    if (strArr[i] !== ''){
      newStr+=strArr[i][0].toUpperCase() + strArr[i].substring(1) + ' '
    }
  }
 return newStr.slice(0, -1)
}
module.exports = showString
