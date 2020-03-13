'use strict'
function getType(arg){
	if (typeof(arg) === 'number' && Number.isNaN(arg) === false){  
			return 'number'
	}
	else if (typeof(arg) === "string"){
		return "string"
	}
		return undefined
}
module.exports = getType
