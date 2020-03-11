'use strict'
function findProperty(prop,obj)  //eslint-disable-line
{
	if (obj.hasOwnProperty(prop) === false)
    {
      return obj[prop]
    }
}
module.exports = findProperty