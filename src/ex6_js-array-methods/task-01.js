'use strict'
function slice(array, begin, end) {
  let newArray = [];
  let newBegin = begin;
  let newEnd = end;
  if (end === undefined) {
    newEnd = array.length;
  }
  if (begin === undefined) {
    newBegin = 0;
  }
  if (begin < 0) {
    newBegin = array.length - Math.abs(begin);
    if (newBegin < 0) {
      newBegin = 0;
    }
  }
  if (end < 0) {
    newEnd = array.length - Math.abs(end);
    if (newEnd < 0) {
      newEnd = 0;
    }
  }
  for (let i = Math.abs(newBegin); i < Math.abs(newEnd); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
module.exports = slice
