'use strict'
function getLowerCamelCase(str){
  let newStr = ''
  let strArr
  strArr = str.toLowerCase().split(' ')
  for (let i = 0; i<strArr.length; i++){
    if (strArr[i] !== ''){
      if (i === 0){
        newStr+=strArr[i][0].toLowerCase() + strArr[i].substring(1) 
      }
      else{
        newStr+=strArr[i][0].toUpperCase() + strArr[i].substring(1) 
      }
    }
  }
 return newStr
}
module.exports = getLowerCamelCase
