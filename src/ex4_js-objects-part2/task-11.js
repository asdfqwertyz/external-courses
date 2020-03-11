'use strict'
function getCountWords(str)
{
  let newArr = []
  let countWords = 0;
  for (let i = 0; i<str.length; i++)
  {
    if(newArr.includes(str.indexOf(str[i])) === false)
    {
      newArr.push(str.indexOf(str[i]))
      console.log(++countWords)
    }
  }
}
module.exports = getCountWords