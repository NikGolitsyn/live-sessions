/* eslint-disable */

// hoisting var example 1
console.log(message);
var message = 'Hoisting is here!';

// hoisting var example 2
var a = 55;
console.log(a);

if (a) {
  var a = 1;

  console.log(a);
}

console.log(a);

// hoisting var example 3
var a = 77;
console.log(a);

function print() {
  var a = 2;
  console.log(a);
}
print();

console.log(a);

// hoisting func example 4
run();

function run() {
  console.log('RUN');
}

stop();
const stop = function () {
  console.log('STOP');
};
