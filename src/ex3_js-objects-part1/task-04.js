'use strict'
function showObj(str,obj)
{
    let objClone = obj
    if (obj.hasOwnProperty(str) !== true)
    {
      objClone[str] = "new"
    }

	return obj
}
module.exports = showObj
