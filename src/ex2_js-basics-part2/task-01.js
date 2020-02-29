'use strict'
function getType(arg)
{
	if (typeof(arg) === 'number')
	{  
		if (isNaN(arg) === true)
		{
			return NaN
		}
			return 'number'
		
	}
	else if (typeof(arg) === 'string')
	{
		return "string"
	}
		return undefined
}
module.exports = getType
