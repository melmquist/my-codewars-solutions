function convertTemp(temp, fromScale, toScale) {
  return Math.round(convertCToNewUnit(convertToCommonC(temp, fromScale), toScale));
}

function convertToCommonC (temp, fromScale) {
  var output;
  switch (fromScale) {
    case "C":
      output = temp * 1;
      break;
    case "F":
      output = (temp - 32) * (5/9);
      break;
    case "K":
      output = temp - 273.15;
      break;
    case "R":
      output = (temp - 491.86) * (5/9);
      break;
    case "De":
      output = 100 - (temp * (2/3));
      break;
    case "N":
      output = temp * (100/33);
      break;
    case "Re":
      output = temp * (5/4);
      break;
    case "Ro":
      output = (temp - 7.5) * (40/21);
      break;
  }
  return output;
}


function convertCToNewUnit (temp, toScale) {
  var output;
  switch (toScale) {
    case "C":
      output = temp * 1;
      break;
    case "F":
      output = (temp * 9/5) + 32;
      break;
    case "K":
      output = temp + 273.15;
      break;
    case "R":
      output = (temp + 273.15) * (9/5);
      break;
    case "De":
      output = (100 - temp) * (3/2);
      break;
    case "N":
      output = temp * (33/100);
      break;
    case "Re":
      output = temp * (4/5);
      break;
    case "Ro":
      output = temp * (21/40) + 7.5;
      break;
  }
  return output;
}

console.log(convertTemp(230, "C", "Ro"));

/*
"C"  for Celsius
"F"  for Fahrenheit
"K"  for Kelvin
"R"  for Rankine
"De" for Delisle
"N"  for Newton
"Re" for Réaumur
"Ro" for Rømer
*/
