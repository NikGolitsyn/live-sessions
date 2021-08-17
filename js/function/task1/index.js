console.log("Hello");

// 5 levels

// 1. lessons theory
// 2. practice
// 50-60%

// 3. live coding + 10-20%
// 4. projects + 10%
// 5. internship
// const res = getSenseOfLife();
// console.log(res);

const getSenseOfLife = () => console.log(42);


console.log(getSenseOfLife());

const getSquared = (num) => num * num;

function sum(num1, num2) {
  return num1 + num2;
}

// test data
console.log(getSquared(10));
console.log(getSquared(0));
console.log(getSquared(-4));
console.log(sum(10, 0));
console.log(sum(11, 22));

//
console.log(sum(-3, 3, 199, 231, 232));

//
function getMessage(age) {
  console.log("I am " + age + " years old");
}

console.log(getMessage(45));
console.log(getMessage(20));
console.log(getMessage(100));

// const mult = (firstNum, secondNum) => firstNum * secondNum;

const mult = function (firstNum, secondNum) {
  return firstNum * secondNum;
};

console.log(mult);
console.log(mult(10, 15));
console.log(mult(1, 15));
console.log(mult(5));

const square = (number) => number * number;

console.log(square(10));
console.log(square(1));
console.log(square(-4));

const getMagicNumber = () => 17;

console.log(getMagicNumber());
console.log(getMagicNumber(18));
