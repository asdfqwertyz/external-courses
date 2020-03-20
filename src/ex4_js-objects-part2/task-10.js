'use strict'
function getReverse(str) {
  let newStr = str.split('').reverse().join('')
  return newStr
}
module.exports = getReverse
