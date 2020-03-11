'use strict'
function showString(str,substr,num)
{
  let newArr
  newArr = str.split(' ')
  newArr.splice(num+1,0,substr)
  return newArr.join(' ')
}
module.exports = showString