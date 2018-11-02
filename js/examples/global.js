var firstName = 'Dhawal';

function showLastName() {}

console.log(this.firstName);
console.log(this.showLastName);
console.log(window.firstName);
console.log(window.showLastName);

console.log(window);
