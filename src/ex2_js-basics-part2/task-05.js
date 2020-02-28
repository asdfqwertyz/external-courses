'use strict'
function getMaxDigit(arr)
{
	let MaxDigitArray = 0
	for (let i = 0; i<arr.length; i++) 
	{
		if (MaxDigitArray<arr[i])
		{
			MaxDigitArray=arr[i]
		}
	}
	return MaxDigitArray
}
module.exports = getMaxDigit