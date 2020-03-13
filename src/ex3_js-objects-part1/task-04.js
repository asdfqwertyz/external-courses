'use strict'
function showObj(str,obj){
	let objClone = obj
  if (obj.hasOwnProperty(str) !== true){
    objClone[str] = 'new'
  }
  for (let key in obj){
    objClone[key] = obj[key]
  }
  return objClone
}
module.exports = showObj
