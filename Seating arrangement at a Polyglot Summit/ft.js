

// arrangeSeating("ABA")
// arrangeSeating("")
arrangeSeating("AAAABBCC")

function arrangeSeating(input) {
  var index = {};
  var output = '';

  for (var i = 0; i < input.length; i++) {
    if (index.hasOwnProperty(input[i])){
      index[input[i]]++;
    } else {
      index[input[i]] = 1;
    }
  }

  console.log("BEFORE");
  console.log(index);
  console.log(Object.keys(index));

  while (Object.keys(index).length > 0) {
    for (var variable in index) {
      if (index.hasOwnProperty(variable)) {
        //loop through object
          //if prop[val] is greater than 0, add that prop to output, and decrement
          //else delete the prop
        if (index[variable] > 0) {
          output+= variable;
          index[variable]--;
        } else {
          delete index[variable];
        }
      }
    }
  }

  console.log("AFTER");
  console.log(index);
  console.log(Object.keys(index));
  console.log(output);




}
