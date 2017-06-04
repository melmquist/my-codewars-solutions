/*

The integer 64 is the first integer that has all of its digits even and
furthermore, is a perfect square.

The second one is 400 and the third one 484.

Give the numbers of this sequence that are in the range [a,b](both values inclusive)

Examples:

even_digit_squares(100, 1000) == [400, 484] # the output should be sorted.
even_digit_squares(1000, 4000) == []
Features of the random tests for even_digit_squares(a, b)

number of Tests = 167
maximum value for a = 1e10
maximum value for b = 1e12
You do not have to check the entries, a and b always positive integers and a < b

*/

//keep generating entries to the PEDPS until high range is hit.
//helper function generate

//how do you start a number generation at a certain point?



//while those both true, keep addin numbers to array with

/*


*/

function evenDigitSquares(a,b) {
  var pedpsArr = [];
  let minMet = false;
  let maxMet = false;

  let base = 1;
  let squared;

  while (minMet === false && maxMet === false) {
    squared = (base * base)
    console.log("squared, ", squared);
    if (squared >= a) {

      pedpsArr.push(squared)
console.log(      "pedpsArr.push(squared)");
      minMet = true;
      base++;
    } else if (squared > b) {
      console.log(      "ASDDASDSA.push(squared)");

      maxMet = true;
      //exit out
    } else {
      base++;
    }
  }

  console.log('ARR:', pedpsArr);

  function isEven(n) {
    return (n % 2 === 0);
  }
};

evenDigitSquares(1,100);
