/*
Move the first letter of each word to
the end of it, then add 'ay' to the end of the word.

rules:
consonant (or consonant clusters), move and end with "ay"
vowels, do not move and add "way"
*/


function pigIt(str) {

  var arrayOfWords = str.split(' ');
  var finalArr = [];

  arrayOfWords.forEach((item) => {
    var firstLetterOfWord = item[0];
    var restOfWord = item.slice(1);

    finalArr.push(restOfWord + firstLetterOfWord + 'ay')
  })

  return finalArr.join(' ')

}


var answer = pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

console.log(answer);
