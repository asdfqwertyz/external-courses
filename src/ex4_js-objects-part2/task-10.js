'use strict'
function getReverse(str){
  let reverseStr = []
  for (let i = 1;i<=str.length;i++){
    reverseStr[i] = str[str.length-i]
  }
  return(reverseStr.join(''))
}
module.exports = getReverse
