'use strict'
function showObj(str,obj)
{
	 if (obj.hasOwnProperty(str) !== true)
    {
      obj[str] = "new" //eslint-disable-line
    }
	let objClone = {}
	for (let key in obj)
	{
		objClone[key] = obj[key]
	}

	return obj
}
module.exports = showObj
