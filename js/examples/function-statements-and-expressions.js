function fullName(lastName) {
  console.log('My last name is ' + lastName);
}

var getFullName = function(lastName) {
  console.log('My last name is ' + lastName);
}

fullName('Bhanushali');
getFullName('Bhanushali');


var getFullName = function(lastName) {
  console.log('My last name is ' + lastName);
}('Bhanushali');
