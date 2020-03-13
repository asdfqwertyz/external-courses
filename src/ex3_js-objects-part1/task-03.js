'use strict'
function showObj(str,obj){
  if (obj.hasOwnProperty(str)){	
    return true
  }
  return false
}
module.exports = showObj
