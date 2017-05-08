/*
encode then return an array of 4 or 5
5th is shortest OR of equal length to other 4 (can also be 0)
lengths of string are split into the 5 array elements on words not characters

shift starts at VARIABLE,


*/

function movingShift(s, shift) {
  var alphLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var alphUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var letter;
  var cipher = '';

  var howManyMove = shift;

  for (var i = 0; i < s.length; i++) {
    letter = s[i];
    if (alphUpper.indexOf(letter) > -1){
      cipher+= alphUpper[(alphUpper.indexOf(letter) + howManyMove) % 26]
    } else if (alphLower.indexOf(letter) > -1){
      cipher+= alphLower[(alphLower.indexOf(letter) + howManyMove) % 26]
    } else {
      cipher+= letter;
    }
    howManyMove++;
  }

  var finalArr = [];
  var numInEachFirstFour = Math.ceil(cipher.length/5)
  var takeOff;
  cipher = cipher.split('')

  for (var i = 0; i < 5; i++) {
    if (i < 4) {
      takeOff = cipher.splice(0,numInEachFirstFour)
      finalArr.push(takeOff.join(''))
    } else {
      takeOff = cipher.splice(0)
      finalArr.push(takeOff.join(''))
    }
  }
  return finalArr
}

var u = "I should have known that you would have a perfect answer for me!!!"
var answer = movingShift(u, 1)

///////////////////////
/*
takes arrays, joins and then reverses the shift
*/

function demovingShift(arr, shift) {
    var joined = arr.join('')

    var alphLower = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse();
    var alphUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reverse();
    var letter;
    var howManyMove = shift;
    var decoded = '';

    for (var i = 0; i < joined.length; i++) {
      letter = joined[i];

      if (alphUpper.indexOf(letter) > -1){
        decoded+= alphUpper[(alphUpper.indexOf(letter) + howManyMove) % 26]
      } else if (alphLower.indexOf(letter) > -1){
        decoded+= alphLower[(alphLower.indexOf(letter) + howManyMove) % 26]
      } else {
        decoded+= letter;
      }
      howManyMove++
    }
    return decoded;
}




var demoveAnswer = demovingShift(answer, 1)
console.log(demoveAnswer);












//
