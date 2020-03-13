'use strict'
function getQuantity(arr){
	let arrNum = [0,0,0]
	for (let i = 0; i < arr.length; i++){
		if (arr[i] !== null && arr[i] !== undefined && arr[i] !== 0){
      if (arr[i] % 2 === 0){
        arrNum[0]++
      }
      if (arr[i] % 2 === -1 || arr[i] % 2 === 1){
        arrNum[1]++
      }
    }
    if (arr[i] === 0){
      arrNum[2]++
    }
  }
  return arrNum
}
module.exports = getQuantity
