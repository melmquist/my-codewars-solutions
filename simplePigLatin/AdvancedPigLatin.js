/*
Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"
If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"
This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
Your job is to take a string and translate it to Pig Latin.
The string will never be undefined but may contain both
numbers and letters. A word will never be a combination of numbers
and letters. Also, there will never be punctuation at the
beginning of a word and the only capital letter in a word
will be the first letter meaning there are zero all capitalized words.

rules:
consonant (or consonant clusters), move and end with "ay"
vowels, do not move and add "way"
*/


function pigIt(str) {
  var puncs = ['!', '?', '.'];

  function isVowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var answer;
    vowels.indexOf(str.toLowerCase()) === -1 ? answer = false : answer = true;
    return answer
  }

  var arrayOfWords = str.split(' ');
  var finalArr = [];

  arrayOfWords.forEach((item) => {

    if (isVowel(item[0])) {
      finalArr.push(item + "way")
    } else {

      var splitWordArrary = item.split('')
      var consonantsAreFinished = false;
      var consonantWordPart = ""
      var restOfWordPart = ""
      var punctuation = ""

      splitWordArrary.forEach((letter) => {
        if (!isVowel(letter) && !consonantsAreFinished) {
          consonantWordPart += letter;
        } else if (puncs.indexOf(letter) > -1) {
          punctuation+= letter
        } else {
          consonantsAreFinished = true;
          restOfWordPart += letter
        }
      })

      finalArr.push(restOfWordPart + consonantWordPart + "ay" + punctuation)
    }

  })

  var capitalizedArr = finalArr.map((word) => {
    var firstLetterUpper = word[0].toUpperCase()
    var restOfWordLower = word.slice(1).toLowerCase()
    return firstLetterUpper + restOfWordLower
  });

  return capitalizedArr.join(' ')

}


var answer = pigIt('Pizza? Yes please!'); // Izzapay? Esyay easeplay!

console.log(answer);
