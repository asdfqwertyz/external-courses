'use strict'
function showString(str){
  let upperChar = str[0].toUpperCase()
  let newStr = str.slice(1)
  return upperChar+newStr
}
module.exports = showString
