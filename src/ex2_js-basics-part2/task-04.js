'use strict'
function isSameArray(arr)
{
  let numOfRepeat = 1;
  for (let i = 0;i<arr.length;i++)
  {
    if (arr[i] === arr[i+1])
    {
      numOfRepeat++
    }
  }
  if (numOfRepeat === arr.length)
  {
    return true
  }
return false
}
module.exports = isSameArray
