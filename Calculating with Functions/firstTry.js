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
    arguments = Array.prototype.slice.call(arguments);
    console.log(arguments[0]);
    // return 4
  }
  return 4;
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

console.log(four(plus(nine())));
