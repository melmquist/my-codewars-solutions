/*
cancel out all NS and EW

NO NOT THAT SIMPLE

N, W, S, E, is still valid...
*/

function dirReduc(array){
  var lat = 0;
  var long = 0;
  var final = []

  array.forEach((item, index) => {
    switch (item) {
      case "NORTH":
        long++;
        break;
      case "SOUTH":
        long--;
        break;
      case "EAST":
        lat++;
        break;
      case "WEST":
        lat--;
        break;
    }
  })

  if (lat === 0 && long === 0){
    return [];
  }

  if (lat > 0){
    for (var i = 0; i < lat; i++) {
      final.push("EAST")
    }
  } else {
    for (var i = 0; i < Math.abs(lat); i++) {
      final.push("WEST");
    }
  }

  if (long > 0){
    for (var i = 0; i < long; i++) {
      final.push("NORTH")
    }
  } else {
    for (var i = 0; i < Math.abs(long); i++) {
      final.push("SOUTH");
    }
  }
  return final;

}

var answer = dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "WEST", "SOUTH"])
console.log(answer);
