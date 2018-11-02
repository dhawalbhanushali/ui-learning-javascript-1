var fullName = 'Dhawal' + 'Bhanushali';

function getFullName(firstName, lastName) {
  return firstName + lastName;
}

var fullNameFromFunction = getFullName('Dhawal', 'Bhanushali');

console.log(fullName === fullNameFromFunction);
