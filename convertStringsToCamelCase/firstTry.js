/*
Complete the method/function so that it converts dash/underscore delimited
words into camel casing. The first word within the output should be capitalized
only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")
----
check if string has dash or underscore
check if first word of string was capitalized


*/



function toCamelCase(string) {
  var undReg = /_+/;
  var dashReg = /-+/;
  var strArr;
  var firstLetter = string[0];
  var isFirstUpper;

  (firstLetter.toUpperCase() === string[0]) ? isFirstUpper = true : isFirstUpper = false;

  if (undReg.test(string)) {
    strArr = string.split('_');
  }
  if (dashReg.test(string)) {
    strArr = string.split('-')
  }
  // console.log("STR ARR: ",  strArr);
  // console.log("isFirstUpper: ",  isFirstUpper);
  // console.log("SADADS", "dog".toUpperCase());

  var newString = strArr.reduce((acc, val) => {
    var firstCap = val[0].toUpperCase();

    return acc + (firstCap + val.slice(1))
  }, "")

  // console.log("newString : ",  newString);

  if (isFirstUpper) {
    return newString;
  } else {
    return newString[0].toLowerCase() + newString.slice(1)
  }

}

var answer = toCamelCase("The-stealth-warrior");
console.log('answer:', answer );
