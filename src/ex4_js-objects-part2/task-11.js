'use strict'
function getCountWords(str) {
  let objWords = {};
  for (let i = 0; i < str.length; i++) {
    if (!objWords.hasOwnProperty(str[i])) {
      objWords[str[i]] = 1;
    } else {
      objWords[str[i]]++;
    }
  }
  for (let key in objWords) {
    console.log(`Символ ${key} - ${objWords[key]}`);
  }
}
module.exports = getCountWords
