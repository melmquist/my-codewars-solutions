/*
cancel out all NS and EW,
NO NOT THAT SIMPLE
N, W, S, E, is still valid...

cancel out all NS and EW, only when they are right after each other

goneNorth = false
goneNorth = true

if



add/subtract from lat and long
*/

function dirReduc(array){
  var interArr = [];
  var finalArr = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === "NORTH"){
      interArr.push(["long", 1])
    } else if (array[i] === "SOUTH") {
      interArr.push(["long", -1])
    } else if (array[i] === "EAST") {
      interArr.push(["lat", 1])
    } else if (array[i] === "WEST") {
      interArr.push(["lat", -1])
    }
  }

  console.log(interArr);

}

var answer = dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "WEST", "SOUTH"])
console.log(answer);
