'use strict'
function showString(str, substr, num) {
  let copyArr1;
  let copyArr2;
  copyArr1 = str.split(" ").slice(0, num + 1);
  copyArr1.push(substr);
  copyArr2 = str.split(" ").slice(num + 1, str.length);
  return copyArr1.join(" ") + " " + copyArr2.join(" ");
}
module.exports = showString
