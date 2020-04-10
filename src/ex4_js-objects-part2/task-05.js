'use strict'
function searchWord(str, searchStr) {
  if (str.includes(searchStr)) {
    return true
  }
  return false
}
module.exports = searchWord
