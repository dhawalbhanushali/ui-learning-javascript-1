function first(a, b, callback) {
  var sum = a + b;

  return callback(sum);
}

var cb = function(sum) {
  console.log('inside cb' + sum);
};

first(1, 2, cb);
