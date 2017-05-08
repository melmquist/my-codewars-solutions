/*
ROT13 is a simple letter substitution cipher that
replaces a letter with the letter 13 letters after
it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the
string ciphered with Rot13. If there are numbers or
special characters included in the string, they should
be returned as they are. Only letters from the latin/english
alphabet should be shifted, like in the original Rot13 "implementation".

Please note that using "encode" in Python is considered cheating.
*/

function rot13(message){

  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var lower = alphabet.split('')
  var upper = alphabet.toUpperCase().split('')

  var output = '';
  var lowerIndex;
  var upperIndex;

  for (var i = 0; i < message.length; i++) {
    var letter = message[i]

    if (lower.indexOf(letter) > -1){
      lowerIndex = lower.indexOf(letter)
      output+= lower[(lowerIndex+13)%26]
    }

    if (upper.indexOf(letter) > -1){
      upperIndex = upper.indexOf(letter)
      output+= upper[(upperIndex+13)%26]
    }

    if ((upper.indexOf(letter) === -1) && (lower.indexOf(letter) === -1)){
      output+= letter
    }
  }
  return output

}

// var answer = rot13("test")
// var answer = rot13("Test")
var answer = rot13("Ruby is cool!")
console.log(answer);
