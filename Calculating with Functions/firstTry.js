function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var x = 8;

function zero() {
  return 0;
}
function one() {
  console.log(arguments);
  return 1;
}
function two() {
  return 2;
}
function three() {
  return 3;
}

function four() {
  if (arguments) {
    console.log("before: ", arguments);
    console.log("before typof: ", typeof arguments);
    arguments = Array.prototype.slice.call(arguments);
    console.log("after: ", arguments);
    console.log("after typeof: ", typeof arguments);
    // console.log(arguments[0]);
    return 4
  } else {
    return 4;
  }
}

function five() {
  return 5;
}
function six() {
  return 6;
}
function seven() {
  return 7;
}
function eight() {
  return 8;
}
function nine() {
  return 9;
}
function ten() {
  return 10;
}

//FUNCTIONS NOT GETTING CALLED
function plus(right) {
  return 0 + right;
}
function minus(right) {
  return 0 - right;
}
function times(right) {
  return true;
}
function dividedBy(right) {
  return true;
}

// console.log(four(plus(four())));

console.log(isFunction(zero()));
