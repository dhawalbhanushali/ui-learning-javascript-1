var iAmYour;

function giveMeAnAdjective() {
  return iAmYour;
}


function whatDoYouSay() {
  iAmYour = 'sun';

  var abc = 'I think you are my ' + giveMeAnAdjective();

  return abc;
}

var pickupLine = 'You are my moon';
console.log(pickupLine);

var yourResponse = whatDoYouSay();
console.log(yourResponse);

iAmYour = 'honey';

var yourResponse = whatDoYouSay();
console.log(yourResponse);

// 1. you are my moon
// 2. I think you are my undefined
// 3. I think you are my honey
//
// 3. I think you are my sun
