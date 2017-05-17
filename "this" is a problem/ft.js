function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return {
    name: this.firstName + ' ' + this.lastName,
    firstName: this.firstName,
    lastName: this.lastName
  };
}

var n = new NameMe('John', 'Doe');

console.log(n);
