/*
Write an algorithm that takes an array and moves
all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(array) {
  var final = [];
  var zeros = [];

  array.forEach((item) => {
    if (item === 0){
      zeros.push(item)
    } else {
      final.push(item)
    }
  })

  return final.concat(zeros)

}

var answer = moveZeros([false,1,0,1,2,0,1,3,"a"])

console.log(answer);
