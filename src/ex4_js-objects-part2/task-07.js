'use strict'
function changeString(str,num)
{
  let newStr = ''
  if (str.length > num)
  {
    for (let i=0; i<num-1;i++)
    {
      newStr +=str[i]
    }
    return newStr+'…'
  }
  return str
}
module.exports = changeString