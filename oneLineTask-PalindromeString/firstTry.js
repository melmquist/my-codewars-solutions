/*
Your task is to generate a palindrome string, using the specified length n,
the specified characters c(all characters in c must be used at least once),
and the code length should less than 62 characters.

n will always be greater that c.length*2-2

take c and
*/
//coding and coding.. shorter and more shorter.. 70 is easy to code, 60.. good luck! ;-)



palindrome = (n,c) => {

  var toBeMid = c.slice().pop()
  var reversed = c.slice().reverse()
  var dif = n - (c.length * 2);

  if (dif > 0) {
    while (dif > 0) {
      c.push(toBeMid)
      dif--;
    }
  } else {
    return c.concat(reversed)
  }

  return c.concat(reversed)
}



var answer = palindrome(30,["a", "b", "c", "d", "e"])
console.log(answer);
