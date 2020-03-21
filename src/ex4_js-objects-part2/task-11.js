'use strict'
function getCountWords(str) {
  let newArr = [];
  let uniqueWords = [];
  let countUniqueWords = -1;
  for (let i = 0; i < str.length; i++) {
    if(!newArr.includes(str[i])) {
      countUniqueWords++;
      uniqueWords[countUniqueWords] = 0;
      newArr.push(str[i]);
    } 
    else {
      uniqueWords[countUniqueWords]++;
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    console.log(`Символ ${newArr[i]} - ${uniqueWords[i]+1}`);
  }
}
module.exports = getCountWords
