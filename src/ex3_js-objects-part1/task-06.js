'use strict'
function getDeepCopyObj(obj){
  let cloneObj = {};
  for (let key in obj){
    cloneObj[key] = obj[key];
    if (typeof obj[key] === "object"){
      if (Array.isArray(obj[key]) === true){
        let objKey = getDeepCopyObj(obj[key])
        cloneObj[key] = [objKey[0]];
      }
      else{
        let objKey = getDeepCopyObj(obj[key]);
        cloneObj[key] = objKey;
      }
    }
  }
  return cloneObj;
}
module.exports = getDeepCopyObj
