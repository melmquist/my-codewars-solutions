function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + ' ' + this.lastName;
}

NamedOne.prototype = {
  get fullName
}


var newObj = new NamedOne("Naomi", "Wang");

console.log(newObj);

newObj.firstName = "franks"

console.log(newObj.firstName);
console.log(newObj);
