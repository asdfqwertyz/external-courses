'use strict'
function showString(str){
  let strRez
  if (str.indexOf(' ') === 0 && str.lastIndexOf(' ') === str.length-1){
    strRez = str.slice(1,str.length-1)
    return strRez
  }
  return str
}
module.exports = showString
