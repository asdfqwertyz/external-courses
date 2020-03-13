'use strict'
function getQuantity(arr){
	let even = 0
	let zero = 0
	for (let i = 0; i < arr.length; i++){
		if (arr[i] % 2 === 0 && arr[i] !== null){
			if (arr[i] === 0){
				zero+=1
			}
			else{
			even += 1
			}
		}
	}
	return [even, arr.length-zero-even, zero]
}
module.exports = getQuantity
