'use strict';

// bind

// function printMessage(country, city) {
//   console.log(this);

//   console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
// }

// const user = {
//   firstName: 'Andrey',
//   age: 111,
//   tempFunc: 'some secret data',
// };

// console.dir(printMessage);

// console.log(user);

// printMessage('Ukraine', 'Lviv'); все что ниже ошибки не обрабатывается

// input context, ...args
// ouput func

// option 1
// const printMessageBinded = printMessage.bind(user); // вариант в приоритете
// printMessageBinded('Ukraine', 'Lviv');

// printMessage.bind(user)('Ukraine', 'Lviv');

// // option 2
// const printMessageBinded1 = printMessage.bind(user, 'UK', 'London');
// printMessageBinded1();

// // option 3
// const printMessageBinded2 = printMessage.bind(user, 'Poland');
// printMessageBinded2('Warshawa');

/// -----------------------

// input function, context, args
// ouput function

// function myBind(func, context, ...args) {
//   // call
//   // input: this, args
//   // ouput: result of function with context and args

//   // input: the same as func
//   // ouput: func result
//   return function (...funcArgs) {
//     func.call(context, ...args, ...funcArgs);
//   };
// }

// test data

// const bindedFunc = myBind(printMessage, user, 'UK');
// bindedFunc('London');

// const bindedFunc2 = myBind(printMessage, user, 'Poland');
// bindedFunc2('Warsaw');

function printMessage(country, city) {
  // console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 21,
  tempFunc: 'some secret data',
};

const user1 = {
  firstName: 'Nikolay',
  age: 33,
  tempFunc: 'some secret data',
};

// myBindAdvanced = тоже самое поведение но без apply call
function myBindAdvanced(func, context, ...args) {
  // call
  // input: this, args
  // ouput: result of function with context and args

  // input: the same as func
  // ouput: func result
  return function (...funcArgs) {
    context['temporaryFunction'] = func;

    const result = context['temporaryFunction'](...args.concat(funcArgs));

    delete context['temporaryFunction'];

    return result;
  };
}

const bindedFuncAdvanced = myBindAdvanced(printMessage, user);
bindedFuncAdvanced('UK', 'London');

const bindedFuncAdvanced1 = myBindAdvanced(printMessage, user, 'UK', 'London');
bindedFuncAdvanced1();

const bindedFuncAdvanced2 = myBindAdvanced(printMessage, user1, 'Poland');
bindedFuncAdvanced2('Warsaw');

function sum(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber + this.thirdNumber + this.fourthNumber);
}

const objWithNumbers = {
  thirdNumber: 10,
  fourthNumber: 20,
};

const bindedFuncAdvanced3 = myBindAdvanced(sum, objWithNumbers);
bindedFuncAdvanced3(10, 20);

const bindedFuncAdvanced4 = myBindAdvanced(sum, objWithNumbers, 20);
bindedFuncAdvanced4(10);

const bindedFuncAdvanced5 = myBindAdvanced(sum, objWithNumbers, 20, -10);
bindedFuncAdvanced5();

class Dog {
  #name;
  #balance;

  constructor(name, balance) {
    this.#name = name;
    this.#balance = balance;
    this.title = 'king'
  }

  get() {
    console.log(this.name, this.balance);
  }
}

const obj = new Dog('Barka', 3000);
console.log(obj);
